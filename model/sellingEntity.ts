/**
 * SKUs API
 * A stock keeping unit (SKU) represents a specific product variation.   <a name=\"sku-object\"></a>     # The SKU object  The SKU object provides product information.  <table> <tr>     <td><b>Attributes</b></td>     <td><b>Description</b></td> </tr> <tr>     <td><b>createdTime</b>     <br>     datetime</td>     <td>The time when the SKU was created.</td> </tr>     <tr>     <td><b>id</b>     <br>     string</td>     <td>Unique identifier of a SKU.</td> </tr> <tr>     <td><b>eccn</b>     <br>     string</td>     <td>The Export Control Classification Number.</td> </tr>      <tr>     <td><b>taxCode</b>     <br>     string</td>     <td>The tax code.</td> </tr>    <tr>     <td><b>name</b>     <br>     string</td>     <td>The product\'s name.</td> </tr>    <tr>     <td><b>countryOfOrigin</b>     string<br>     </td>     <td>Two-letter country code.</td> </tr> <tr>     <td><b>weight</b>     <br>     number</td>     <td>The weight of the SKU in the unit system specified with weightUnit</td> </tr>    <tr>     <td><b>weightUnit</b>     <br>     string</td>     <td>The unit of measurement that applies to the SKU weight. If you do not specify a value for weightUnit, then the default unit of measurement is applied.</td> </tr>   <tr>     <td><b>liveMode</b>     <br>     boolean</td>     <td>Has the value is true of the object exists in live mode or the value false if the object exists in test mode.</td> </tr>   </table>  ## SKU object example     {       \"createdTime\": \"2018-04-25T20:36:00Z\",       \"id\": \"sku_5823594809\",       \"eccn\": \"EAR99\",       \"taxCode\": \"4323.310_A\",       \"name\": \"Athena Womens Running Shoes\",       \"countryOfOrigin\": \"US\",       \"weight\": 20.5,       \"weightUnit\": \"oz\",       \"liveMode\": false     }     
 *
 * The version of the OpenAPI document: 1.0.14
 * Contact: aknights@digitalriver.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class SellingEntity {
    /**
    * The identifier of the selling entity.
    */
    'id'?: string;
    /**
    * The name of the selling entity.
    */
    'name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SellingEntity.attributeTypeMap;
    }
}

