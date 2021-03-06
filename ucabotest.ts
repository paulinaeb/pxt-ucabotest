/**
* Development environment specifics:
* Written in Microsoft Makecode 
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. 
* Distributed as-is; no warranty is given.
*/

/**
 * Functions to operate the ucabotest
 */

 enum ucabotestType{
	 ucabotest=1,
	 adcVal=2,
 }


//% color=#f44242 icon="\uf185"
namespace ucabotest {

    // Functions for reading light from the ucabotest in lux or straight adv value

    /**
    * Reads the number
    */
    //% weight=30 blockId="ucabotest_ucabot" block="Get light on pin %pin | in %ucabotestType"
    export function ucabotest(pin: AnalogPin, type: ucabotestType): number{
      let ADCVal = pins.analogReadPin(pin)
      switch(type){
        case ucabotestType.ucabotest: return getUcabot(ADCVal)
        case ucabotestType.adcVal: return ADCVal
        default: return -11111111
      }
    }

	/**
     * Function used for simulator, actual implementation is in ucabotest.cpp
     */
    //% shim=ucabotest::getUcabot
    function getUcabot(ADCVal: number) {
        // Fake function for simulator
        return 0
    }

    }
