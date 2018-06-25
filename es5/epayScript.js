var cert_id = "c183d918";
var merchant_id = "98683031";
var shop_name = "forum-astana.org";
var amount = actionArgs["priceType"] === "259" ? "30000" : "150000";
var currency = "398";

var order_id = formDataId.length < 10 ? new Array(10 - formDataId.length).join("0") + formDataId : formDataId;

var epayPostUrl = "https://epay.kkb.kz/jsp/process/logon.jsp";
var backLinkUrl = "https://forum-astana.org";
var failureBackLinkUrl = "https://forum-astana.org";
var postLinkUrl = "https://astanaserver.accredcenter.ru/interaction/admin/admin/1/WEB/" + formDataId;
var failurePostLinkUrl = "https://epay.kkb.kz/jsp/client/pay.jsp";
var successUrl = "https://forum-astana.org";

var prvKeyPEM = "-----BEGIN ENCRYPTED PRIVATE KEY-----" +
"MIICxjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQICBtbg0UoJ6gCAggA" +
"MBQGCCqGSIb3DQMHBAg3UWuJT/EEgASCAoAA9pTUscBoKOK6j7AFyhx+ho+j2omu" + 
"nQRwW9Yf9iDLgznPWDjDDlF+XUCo+cMDctmgJfJn/7mbUX3q2BqbaPKoRqN/0UC3" + 
"5ekfB+6aktp4CsrwmD/ed2Lkh44YkH8/zJ+PsqFDhMhJx+fDGpfAjGUh0g8yP2my" + 
"Fu79Xqm9EtSI8HkDkatrErwaSwcbVwZVNuDiixLzKCUDv3f8CmLJIaZzm7zxbdeU" + 
"OL26DkIaYcrV+Pi4Pc8VIvLF5D7gYyyNSX0ARVaXZ+QSS0cDaFSHbsVuyShvsp4o" + 
"tYaH2DkrXLrnUQeQY1ijb3HBVYl+tkes8AF1vJC1LTiYtaNvhDf+dxschHJVj2ng" + 
"PD2WbVx/WtI0wl7n/RPiFYBVl/pUV3oeFrpMT/FlMANTH+O6uHIxjMptv/iTWoGx" + 
"8YzU2MtUZJpwB0ncjn5W9kZIokmNsfIVlDWpITVzgKEk1UrsH3YJGvoxjIQt1Ma6" + 
"7OAPymhd2LdtN2xpczG67qY/aSrC75COCf3RlKzVJXkDPn0BtaAc9fxpc/qK1YtY" + 
"DQN2a3/pSYBVjFKpOI9KGvy0nNIf/tpz9e+NfF++Fccp3wIq25ZXjzJnHV475q3m" + 
"V2G9VAi/poWPMnLzR6F5ceBZJuyqV4rKJeHJmHvS7A8mQTvq6kFFAc26bUcPI42V" + 
"SXDw7+3FBqB+eFQ3AFe8AG2XMvdgP6udgn9TOqU0kG0Z4ITt9H9i4tEmTtn1yMUA" + 
"EqOYiYZfxHG+/wb7FYG184b2/HoKHx9KPFASr5O2SLMpZyXDxvAN9O3CEP4INheP" + 
"RQG9ofsO2NQUipVGJEXVP0Uq3C1046kz57D4kMhcU3iOzRR47rThADo1" +
"-----END ENCRYPTED PRIVATE KEY-----";

var prvPassword = "WDfUveEf9i3";

if(actionArgs["payType"] === "266") {
    window.location.replace(successUrl);
    return;
}

var xMLSerializer = new XMLSerializer();

function toByteArray(hexString) {
    var result = [];
    while (hexString.length >= 2) {
        result.push(parseInt(hexString.substring(0, 2), 16));
        hexString = hexString.substring(2, hexString.length);
    }
    return result;
}

function arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}

function getRSASignature(str){
    var sig = new KJUR.crypto.Signature({"alg": "SHA1withRSA"});
    sig.init(prvKeyPEM, prvPassword);
    sig.updateString(str);

    var rr = sig.sign();

    var enc = toByteArray(rr);

    var stringToEncode = enc.reverse();
    var encodedData = arrayBufferToBase64(stringToEncode);

    return encodedData;
}

var Base64 = {

    // private property
    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    
    // public method for encoding
    encode : function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
    
        input = Base64._utf8_encode(input);
    
        while (i < input.length) {
    
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
    
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
    
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
    
            output = output +
            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    
        }
    
        return output;
    },
    
    // public method for decoding
    decode : function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
    
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    
        while (i < input.length) {
    
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
    
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
    
            output = output + String.fromCharCode(chr1);
    
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
    
        }
    
        output = Base64._utf8_decode(output);
    
        return output;
    
    },
    
    // private method for UTF-8 encoding
    _utf8_encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
    
        for (var n = 0; n < string.length; n++) {
    
            var c = string.charCodeAt(n);
    
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
    
        }
    
        return utftext;
    },
    
    // private method for UTF-8 decoding
    _utf8_decode : function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
    
        while ( i < utftext.length ) {
    
            c = utftext.charCodeAt(i);
    
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
    
        }
    
        return string;
    }
    
}

function stringToBase64(str){
    return Base64.encode(str);
}

var epayDocument = document.implementation.createDocument(null, "document");

var merchant = document.createElementNS(null, "merchant");
merchant.setAttribute("cert_id", cert_id);
merchant.setAttribute("name", shop_name);

var order = document.createElementNS(null, "order");
order.setAttribute("order_id", order_id);
order.setAttribute("amount", amount);
order.setAttribute("currency", currency);

var department = document.createElementNS(null, "department");
department.setAttribute("merchant_id", merchant_id);
department.setAttribute("amount", amount);

order.appendChild(department);
merchant.appendChild(order);

var merchantStr = xMLSerializer.serializeToString(merchant)

var merchant_sign = document.createElementNS(null, "merchant_sign");
merchant_sign.setAttribute("type", "RSA");

merchant_sign.innerHTML = getRSASignature(merchantStr)

epayDocument.documentElement.appendChild(merchant);
epayDocument.documentElement.appendChild(merchant_sign);

var epayDocumentStr = xMLSerializer.serializeToString(epayDocument);
var epayDocumentBase64 = stringToBase64(epayDocumentStr);

var appendixDocument = document.implementation.createDocument(null, "document");

var appendixItem = document.createElementNS(null, "item");
appendixItem.setAttribute("number", "1");
appendixItem.setAttribute("quantity", "1");
appendixItem.setAttribute("amount", "1");

appendixDocument.documentElement.appendChild(appendixItem);
var appendixDocumentStr = xMLSerializer.serializeToString(appendixDocument);
var appendixDocumentBase64 = stringToBase64(appendixDocumentStr);

var form = document.createElement("form");
form.setAttribute('method',"post");
form.setAttribute('action', epayPostUrl);

var signed_Order_B64 = document.createElement("input");
signed_Order_B64.setAttribute('type', "hidden");
signed_Order_B64.setAttribute('name', "Signed_Order_B64");
signed_Order_B64.setAttribute('value', epayDocumentBase64 + "=");

var email = document.createElement("input");
email.setAttribute('type', "email");
email.setAttribute('name', "email");
email.value = actionArgs["email"].replace(/['"]+/g, '');

var backLink = document.createElement("input");
backLink.setAttribute('type', "hidden");
backLink.setAttribute('name', "BackLink");
backLink.setAttribute('value', backLinkUrl);

var failureBackLink = document.createElement("input");
failureBackLink.setAttribute('type', "hidden");
failureBackLink.setAttribute('name', "FailureBackLink");
failureBackLink.setAttribute('value', failureBackLinkUrl);

var postLink = document.createElement("input");
postLink.setAttribute('type', "hidden");
postLink.setAttribute('name', "PostLink");
postLink.setAttribute('value', postLinkUrl);

var failurePostLink = document.createElement("input");
failurePostLink.setAttribute('type', "hidden");
failurePostLink.setAttribute('name', "FailurePostLink");
failurePostLink.setAttribute('value', failurePostLinkUrl);

var appendix = document.createElement("input");
appendix.setAttribute('type', "hidden");
appendix.setAttribute('name', "appendix");
appendix.setAttribute('value', appendixDocumentBase64);

var template = document.createElement("input");
template.setAttribute('type', "hidden");
template.setAttribute('name', "template");
template.setAttribute('value', "default.xsl");

var card_name = document.createElement("input");
card_name.setAttribute('type', "hidden");
card_name.setAttribute('name', "card_name");
card_name.setAttribute('value', "test");

form.appendChild(signed_Order_B64);
form.appendChild(email);
form.appendChild(backLink);
form.appendChild(postLink);
form.appendChild(failureBackLink);
form.appendChild(template);
form.appendChild(card_name);

document.getElementsByTagName('body')[0].appendChild(form);

form.submit();

