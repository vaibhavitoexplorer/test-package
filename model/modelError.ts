/**
 * SKUs API
 * A stock keeping unit (SKU) represents a specific product variation.   <a name=\"sku-object\"></a>     # The SKU object  The SKU object provides product information.  <table> <tr>     <td><b>Attributes</b></td>     <td><b>Description</b></td> </tr> <tr>     <td><b>createdTime</b>     <br>     datetime</td>     <td>The time when the SKU was created.</td> </tr>     <tr>     <td><b>id</b>     <br>     string</td>     <td>Unique identifier of a SKU.</td> </tr> <tr>     <td><b>eccn</b>     <br>     string</td>     <td>The Export Control Classification Number.</td> </tr>      <tr>     <td><b>hsCode</b>     <br>     string</td>     <td>International & US HS Code & Harmonized Tariff Code.</td> </tr>    <tr>     <td><b>partNumber</b>     <br>     string</td>     <td>Manufacturer part number.</td> </tr>    <tr>     <td><b>taxCode</b>     <br>     string</td>     <td>The tax code.</td> </tr>    <tr>     <td><b>name</b>     <br>     string</td>     <td>The product\'s name.</td> </tr>    <tr>     <td><b>description&#42;</b>     <br>     string</td>     <td>A description of the product.</td> </tr>   <tr>     <td><b>image&#42;</b>     <br>     string</td>     <td>An image of the product.</td> </tr>      <tr>     <td><b>url&#42;</b>     <br>     string</td>     <td>A product URL.</td> </tr>     <tr>     <td><b>countryOfOrigin</b>     <br>     string     </td>     <td>Two-letter country code.</td> </tr> <tr>     <td><b>weight</b>     <br>string     </td>     <td>The weight of the sku in the unit system specified with weightUnit.</td> </tr> <tr>     <td><b>weightUnit</b>     string<br>     </td>     <td>The unit of measurement that applies to the sku weight. If you do not specify a value for weightUnit, then the default unit of measurement is applied.</td> </tr> <tr>     <td><b>liveMode</b>     <br>     boolean</td>     <td>Has the value is true of the object exists in live mode or the value false if the object exists in test mode.</td> </tr>   </table>  &#42;These attribute values are only needed for Klarna, ApplePay, or GooglePay payment types.  ## SKU object example  <pre>         {       \"id\": \"sku_5823594809\",       \"eccn\": \"EAR99\",       \"hsCode\": \"6404.20\",       \"taxCode\": \"4323.310_A\",       \"name\": \"Athena Womens Running Shoes\",       \"description\": \"Athena Womens Running Shoes\",       \"image\": \"https://imageurl.com\",       \"url\": \"https://producturl.com\",       \"weight\": 20.5,       \"weightUnit\": \"oz\",       \"countryOfOrigin\": \"US\"     }  </pre> 
 *
 * The version of the OpenAPI document: 1.0.13
 * Contact: aknights@digitalriver.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class ModelError {
    'code'?: string;
    'parameter'?: string;
    'message'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "parameter",
            "baseName": "parameter",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }
}

