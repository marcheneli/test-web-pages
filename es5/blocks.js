if (!window.Platform5App) {
    alert("No configuration data found");
}

window.Platform5App.defaultConfig = {
    elementId: "app",
    endpointUri: "http://localhost:8080/endpoint"
};

window.Platform5App.run = function(config) {
    var appConfig = Object.assign(window.Platform5App.defaultConfig, config || {});

    console.log("App config", appConfig)

    var ValueTypes = {
        ObjectRef: "VTObjectRef"
    };

    var DisplayElements = {
        Section: "sevts.server.blocks.WebRegistrationBlockSectionDisplayElement",
        Field: "sevts.server.blocks.FieldElement"
    };

    var Controls = {
        TextField: "sevts.server.blocks.ElementControl.TextField",
        TextArea: "sevts.server.blocks.ElementControl.TextArea",
        Select: "sevts.server.blocks.ElementControl.Select",
        CheckBoxes: "sevts.server.blocks.ElementControl.CheckBoxes",
        RadioBoxes: "sevts.server.blocks.ElementControl.RadioBoxes"
    };

    var DataInputTypes = {
        FormFieldInput: "sevts.server.blocks.ElementDataInput.FormFieldInput"
    };

    var DataOutputTypes = {
        FormFieldOutput: "sevts.server.blocks.ElementDataOutput.FormFieldOutput"
    };

    var outputs = {};
    var inputs = {};

    function element(tagName, attributes, children) {
        var tagElement = document.createElement(tagName);
        for ( var idx in attributes ) {
            if ( !attributes.hasOwnProperty(idx) ) continue;

            switch(idx) {
                case "textContent":
                    tagElement.textContent = attributes[idx];
                    break;
                default:
                    tagElement.setAttribute(idx, attributes[idx]);
            }
        }

        if ( children instanceof Array ) {
            for (var childIdx = 0; childIdx < children.length; childIdx++) {
                tagElement.appendChild(children[childIdx]);
            }
        } else if ( children ) {
            tagElement.appendChild(children);
        }

        return tagElement;
    }

    function registerElementOutput(displayElement) {
        if ( !displayElement.dataOutput.length ) return;

        var dataOutput = displayElement.dataOutput[0];

        switch(dataOutput.$type) {
            case DataOutputTypes.FormFieldOutput:
                if ( !dataOutput.formField.length ) return;
                outputs[dataOutput.formField[0].value] = {
                    meta: dataOutput,
                    value: null
                };
        }
    }

    function elementOutputChanged(displayElement, value) {
        var dataOutput = displayElement.dataOutput[0];
        switch(dataOutput.$type) {
            case DataOutputTypes.FormFieldOutput:
                if ( !dataOutput.formField.length ) return;
                outputs[dataOutput.formField[0].value].value = value;
                break;
        }
    }

    function renderEmptyErrorRef(position, errorInfo) {
        return element("span", {"error-ref": position, "error": errorInfo});
    }

    function renderSelectControl(displayElement, control) {
        var selectControl = element("select", {class: "platform5-select-control"});
        selectControl.addEventListener("change", function(event) {
            elementOutputChanged(displayElement, selectControl.value);
        });

        if ( displayElement.dataInput.length ) {
            switch(displayElement.dataInput[0].$type) {
                case DataInputTypes.FormFieldInput:
                    var formField = displayElement.dataInput[0].formField;

                    if (formField.length && inputs.hasOwnProperty(formField[0].value)) {
                        var input = inputs[formField[0].value];
                        for ( var valueIdx in input) {
                            if ( !input.hasOwnProperty(valueIdx)) continue;

                            var inputValue = input[valueIdx];
                            var valueOption = element("option", {
                                "value": inputValue.id.value,
                                "textContent": inputValue.id.value
                            });

                            selectControl.appendChild(valueOption);
                        }
                    }
            }
        }

        return selectControl;
    }

    function renderTextFieldControl(displayElement, control) {
        var textControl = element("input", {class: "platform5-text-field-control"});
        textControl.addEventListener("keypress", function(event) {
            elementOutputChanged(displayElement, textControl.value);
        });

        return textControl;
    }

    function renderField(fieldDisplay, controlElement) {
        registerElementOutput(fieldDisplay);

        var fieldElement = element("div", {class: "platform5-display-field"}, [
            element("label", {textContent: fieldDisplay.label.text}),
            controlElement,
            element("span", {textContent: "Element is valid"})
        ]);

        return fieldElement;
    }

    function renderSectionDisplayElement(displayElement) {
        var children = [];
        for ( var childIdx in display.children ) {
            if ( !display.children.hasOwnProperty(childIdx)) continue;

            children.push(renderField(display.children[childIdx]));
        }

        return element("div", {}, children);
    }

    function renderFieldDisplayElement(fieldDisplayElement) {
        if (!fieldDisplayElement.control.length) {
            return renderEmptyErrorRef(fieldDisplayElement.position, "no-control");
        }

        var control;
        switch(fieldDisplayElement.control[0].$type) {
            case Controls.TextField:
                control = renderTextFieldControl(fieldDisplayElement, fieldDisplayElement.control[0]);
                break;
            case Controls.Select:
                control = renderSelectControl(fieldDisplayElement, fieldDisplayElement.control[0]);
                break;
        }

        if ( !control ) {
            return renderEmptyErrorRef(fieldDisplayElement.position, "unknown-control");
        }

        return renderField(fieldDisplayElement, control);
    }

    function renderElement(displayElement) {
        switch(displayElement.$type) {
            case DisplayElements.Section:
                return renderSectionDisplayElement(displayElement);
            case DisplayElements.Field:
                return renderFieldDisplayElement(displayElement);
        }
    }

    function renderElements(displayElements) {
        var elements = [];

        for ( var i in displayElements ) {
            if ( !displayElements.hasOwnProperty(i)) continue;

            elements.push(renderElement(displayElements[i]));
        }

        return elements;
    }

    function renderDisplay(displayElements) {
        return element("div", {"class": "platform5-webregistration-block"},
            renderElements(displayElements));
    }

    function renderForm(blockId, elements) {
        var form = element("form", {"class": "platform5-webregistration-form"},
            elements);

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            submitFormData();
        });

        var submit = element("button", {
            "class": "platform5-webregistration-form-submit",
            "type": "submit",
            "textContent": "Submit"
        });

        form.appendChild(submit);

        return form;
    }

    function submitFormData() {
        var formDataValues = [];
        for ( var outputIdx in outputs ) {
            var output = outputs[outputIdx];
            switch(output.meta.$type) {
                case DataOutputTypes.FormFieldOutput:
                    formDataValues.push({
                        "$type": "sevts.server.blocks.ElementDataOutputValue",
                        "output": {
                            "$type": "sevts.server.blocks.ElementDataOutput.FormFieldOutput",
                            "formField": [{
                                "$type": "sevts.server.domain.Id",
                                "value": outputIdx
                            }]
                        },
                        "value": {
                            "$type": "VStr",
                            "value": output.value
                        }
                    });
            }
        }

        var request = {
            "id": UUIDjs.create(4).hex,
            "service": "WebRegistration.Block",
            "method": "Registration",
            "data": JSON.stringify({
                "$type": "sevts.server.protocol.api.webregistration.blocks.Registration.Cmd",
                "block": Platform5App.data.schemaJson.block,
                "values": formDataValues
            })
        };

        var xhr = new XMLHttpRequest();
        xhr.open("POST", appConfig.endpointUri);
        xhr.send(JSON.stringify(request));
    }

    function fetchAllInputs(elementDisplay) {
        var promises = [];
        for ( var elementIdx in elementDisplay ) {
            if ( !elementDisplay.hasOwnProperty(elementIdx) ) continue;

            promises.push(new Promise(function(resolve, reject) {
                var display = elementDisplay[elementIdx];
                if ( !display.dataInput.length ) {
                    resolve();
                    return;
                }

                switch(display.dataInput[0].$type) {
                    case DataInputTypes.FormFieldInput:
                        if ( !display.dataInput[0].formField.length ) {
                            reject("Data input configuration is incomplete");
                            return;
                        }

                        var formField = Platform5App.data.formFields.find(function(f) {
                            return f.id.value === display.dataInput[0].formField[0].value
                        });
                        if ( !formField ) {
                            reject("Data input configuration is incorrect: target field does not exists");
                            return;
                        }

                        switch(formField.entity.valueType.$type) {
                            case ValueTypes.ObjectRef:
                                if (!Platform5App.data.dictionaries.hasOwnProperty(formField.entity.valueType.family.value)) {
                                    reject("Data input configuration is incorrect: unknown dictionary object");
                                    return;
                                }

                                var targetDictionary = Platform5App.data.dictionaries[formField.entity.valueType.family.value];

                                inputs[display.dataInput[0].formField[0].value] = targetDictionary;

                                resolve();
                                break;
                            default:
                                resolve();
                        }
                        break;
                    default:
                        reject("Unknown input type");
                }
            }));
        }

        return Promise.all(promises);
    }

    fetchAllInputs(Platform5App.data.schemaJson.display)
        .then(function(result) {
            var rootElement = document.getElementById(appConfig.elementId);

            if (!rootElement) {
                return;
            }

            var blockId = "${block.id}";

            var element = renderDisplay(Platform5App.data.schemaJson.display);

            var form = renderForm(blockId, element);
            rootElement.appendChild(form);
        })
        .catch(function(e) {
            console.error("Error", e);
            alert("Unable to fetch one or more inputs")
        });
};