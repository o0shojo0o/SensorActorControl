////////// ToDo //////////
// 
// - Colortemp handling
// - Color handling
// - NightTime handling 
// - TimeOut (PIR) handling 
//////////////////////////

// Define actors
const Actors = [
    // eg. {name: '', id: '', on: '', level: '', ct: '', color: '', posMin: 0, posMax: 100, briMin:0, briMax: 100},
    //Flur
    {name: 'FL.Licht.Decke.Hinten', id: 'zigbee.0.0017880102a096e5'},
    {name: 'FL.Licht.Decke.Vorne', id: 'zigbee.0.0017880102eebc0b'},
    {name: 'FL.Licht.Links', id: 'zigbee.0.84182600000c6dfd'},
    // Küche
    {name: 'KU.Licht.Deckenleuchte', id: 'zigbee.0.group_1', briMin: 2},
    {name: 'KU.Licht.Deckenleuchte.1', id: 'zigbee.0.842e14fffe2304a1', briMin: 2},
    {name: 'KU.Licht.Deckenleuchte.2', id: 'zigbee.0.588e81fffee3b050', briMin: 2},
    {name: 'KU.Licht.Deckenleuchte.3', id: 'zigbee.0.588e81fffed3eddd', briMin: 2},
    {name: 'KU.Licht.Arbeitsplatte', id: 'zigbee.0.group_3'},
    {name: 'KU.Licht.Arbeitsplatte.Links',  id: 'zigbee.0.7cb03eaa00b1a4bf'},
    {name: 'KU.Licht.Arbeitsplatte.Rechts', id: 'zigbee.0.84182600000c9c50'},
    // Wohnzimmer
    {name: 'WZ.Licht.Fensterbank', id: 'zigbee.0.84182600000c77dd'},
    {name: 'WZ.Licht.StandLampe', id: 'zigbee.0.588e81fffedb8b1a', briMin: 2},    
    // Kinderzimmer
    {name: 'KZ.Licht.Betthimmel', id: 'zigbee.0.8418260000101f8c'},
    {name: 'KZ.Licht.Disco', id: 'zigbee.0.841826000010328a'},
    {name: 'KZ.Licht.Decke', id: 'zigbee.0.842e14fffe1f08e7', briMin: 2},   
    // Schlafzimmer
    {name: 'SZ.Licht.Bett', id: 'zigbee.0.588e81fffefea724'},
    {name: 'SZ.Blind.Links', id: 'zigbee.0.680ae2fffe974af1', posMax: 90},
    {name: 'SZ.Blind.Rechts', id: 'zigbee.0.680ae2fffe54a2ba', posMax: 90},
    // Terrasse
    {name: 'TR.Licht.GardenPole', id: 'zigbee.0.7cb03eaa00a9572e', briMin: 2},   
    // Büro
    {name: 'BU.Blind', id: 'zigbee.0.680ae2fffeed55f6', posMax: 97},
];
 
// Define sensors
const Sensors = [
    // eg. {name: '', id: ''},
    //Flur
    {name: 'FL.Sensor.Taster.UP.Hinten', id: ''}, // Todo
    {name: 'FL.Sensor.Taster.UP.Vorne', id: ''}, // Todo
    // Küche
    {name: 'KU.Sensor.Taster', id: 'zigbee.0.00158d00027bd7e1'},
    // Büro
    {name: 'BU.Sensor.Taster.Free', id: 'zigbee.0.00158d00027c1027'},
    {name: 'BU.Sensor.Taster.OpenClose', id: 'zigbee.0.680ae2fffeaca6fa'},
    // Kinderzimmer
    {name: 'KZ.Sensor.Taster', id: 'zigbee.0.00158d00027c1ca4'},
    {name: 'KZ.Sensor.Taster.UP', id: 'zigbee.0.5c0272fffe3c2124'},
    {name: 'KZ.Sensor.Fernbedienung', id: 'zigbee.0.ec1bbdfffea53484'},
    // Wohnzimmer
    {name: 'WZ.Sensor.Fernbedienung', id: 'zigbee.0.00178801080cf9f9'},
    // Schlafzimmer
    {name: 'SZ.Sensor.Taster.OpenClose', id: 'zigbee.0.680ae2fffe549bb6'},
];
 
// Definde events
const Events = [
    // eg.  {sensor: '', events: ['',''], actors: ['',''], action: ''}, current available [ toggle, on, off, autoDim, dimUp, dimDown, open, close ]
    // Küche
    {sensor: 'KU.Sensor.Taster', events: ['right_click'], actors: ['KU.Licht.Arbeitsplatte.Links'], action: 'toggle'},
    {sensor: 'KU.Sensor.Taster', events: ['left_click'], actors: ['KU.Licht.Arbeitsplatte.Rechts'], action: 'toggle'},
    {sensor: 'KU.Sensor.Taster', events: ['both_click'], actors: ['KU.Licht.Deckenleuchte'], action: 'toggle'},
    // Kinderzimmer
    {sensor: 'KZ.Sensor.Taster', events: ['left_click'], actors: ['KZ.Licht.Disco'], action: 'toggle'},
    {sensor: 'KZ.Sensor.Taster', events: ['right_click'], actors: ['KZ.Licht.Betthimmel'], action: 'toggle'},
    {sensor: 'KZ.Sensor.Taster.UP', events: ['state'], actors: ['KZ.Licht.Decke'], action: 'toggle'},
    {sensor: 'KZ.Sensor.Taster.UP', events: ['up_button'], actors: ['KZ.Licht.Decke'], action: 'autoDim'},
    //{sensor: 'KZ.Sensor.Fernbedienung', events: ['on'], actors: ['KZ.Licht.Decke'], action: 'on'},
    //{sensor: 'KZ.Sensor.Fernbedienung', events: ['off'], actors: ['KZ.Licht.Decke'], action: 'off'},
    //{sensor: 'KZ.Sensor.Fernbedienung', events: ['brightness_step_up'], actors: ['WZ.Licht.StandLampe'], action: 'dimUp'},
    //{sensor: 'KZ.Sensor.Fernbedienung', events: ['brightness_step_down'], actors: ['WZ.Licht.StandLampe'], action: 'dimDown'},
    // Schlafzimmer
    {sensor: 'SZ.Sensor.Taster.OpenClose', events: ['cover_open'], actors: ['SZ.Blind.Links', 'SZ.Blind.Rechts'], action: 'open'},
    {sensor: 'SZ.Sensor.Taster.OpenClose', events: ['cover_close'], actors: ['SZ.Blind.Links', 'SZ.Blind.Rechts'], action: 'close'},
    // Büro
    {sensor: 'BU.Sensor.Taster.OpenClose', events: ['cover_open'], actors: ['BU.Blind'], action: 'open'},
    {sensor: 'BU.Sensor.Taster.OpenClose', events: ['cover_close'], actors: ['BU.Blind'], action: 'close'},
    // Wohnzimmer
    {sensor: 'WZ.Sensor.Fernbedienung', events: ['state'], actors: ['WZ.Licht.StandLampe'], action: 'onOff'},
    {sensor: 'WZ.Sensor.Fernbedienung', events: ['up_button', 'up_hold'], actors: ['WZ.Licht.StandLampe'], action: 'dimUp'},
    {sensor: 'WZ.Sensor.Fernbedienung', events: ['down_button', 'down_hold'], actors: ['WZ.Licht.StandLampe'], action: 'dimDown'},
];

/////////////////////////////////////////////////// Logic ////////////////////////////////////////////////////////////////////
const cache = [];

// Register events
// Run through each definetion
for (const key in Events) {
    const sensor = Sensors.find(x=>x.name == Events[key].sensor);
    const events = Events[key].events;   
    // Run through each events
    for (const eKey in events) {
        const triggerDp = sensor.id + '.' + events[eKey];    
        const actors = Events[key].actors;
        const action = Events[key].action;
        
        // Toogle event register
        if (action == 'toggle') {
            on ({id: triggerDp, val: true}, (obj)=> {
                toggle(actors);
            });
        }
    
        // On event register
        else if (action == 'on') {
            on ({id: triggerDp, val: true}, (obj)=> {
                setOnOff(actors, true);
            });
        } 
        
        // Off event register
        else if (action == 'off') {
            on ({id: triggerDp, val: true}, (obj)=> { 
                setOnOff(actors, false);
            });
        }

        // OnOff event register
        else if (action == 'onOff') {
            on ({id: triggerDp}, (obj)=> { 
                setOnOff(actors, obj.state.val);
            });
        }

        // AutoDim event register
        else if (action == 'autoDim') {
            on ({id: triggerDp}, (obj)=> { 
                autoDim(obj, actors);
            });
        }

        // DimUp event register
        else if (action == 'dimUp') {
            on ({id: triggerDp, val: true}, (obj)=> { 
                dimUpDown(actors, true);
            });
        }

        // DimDown event register
        else if (action == 'dimDown') {
            on ({id: triggerDp, val: true}, (obj)=> { 
                dimUpDown(actors, false);
            });
        }

        // Open (Blind) event register
        else if (action == 'open') {
            on ({id: triggerDp, val: true}, (obj)=> { 
                openClose(actors, true);
            });
        }

        // Close (Blind) event register
        else if (action == 'close') {
            on ({id: triggerDp, val: true}, (obj)=> { 
                openClose(actors, false);
            });
        }
    }
}

// Create datapoint string
/**
* @param {string} actorName
* @param {string} control
*/
function getDataPoint(actorName, control){    
    let dataPoint;
    const actor = Actors.find(x=>x.name == actorName)    
    // Has an override been defined?
    if (actor[control] != undefined){
        dataPoint =  `${actor.id}.${actor[control]}`;        
    }
    else{
        // Zigbee actor
        if (actor.id.startsWith('zigbee')){
            if (control == 'on'){
                dataPoint =  `${actor.id}.state`;
            }

            else if (control == 'level'){
                dataPoint = `${actor.id}.brightness`;
            }

            else if (control == 'ct'){
                dataPoint = `${actor.id}.colortemp`;
            }

            else if (control == 'color'){
                dataPoint = `${actor.id}.color`;
            }

            else if (control == 'pos'){
                dataPoint = `${actor.id}.position`;
            }
        }

        // WLED Actor
        else if (actor.id.startsWith('wled')){
            if (control == 'on'){
                dataPoint = `${actor.id}.on`;
            }
            else if (control == 'level'){
                dataPoint = `${actor.id}.bri`;
            }

            else if (control == 'color'){
                dataPoint = `${actor.id}.seg.0.col.0_HEX`;
            }
        }
    }

    if (!existsState(dataPoint)){
        log(`State: ${control} for Device: ${actor.name} rejected, state not exist!`, 'warn')
        return undefined;
    }
   
    return dataPoint;
}

// On or off function
/**
* @param {string[]} actors
* @param {boolean} onOff
*/
function setOnOff(actors, onOff) { 
    for (const key in actors) {
        const dataPoint = getDataPoint(actors[key], 'on'); 
        if  (dataPoint != undefined){    
            setState(dataPoint, onOff)
        }
    } 
}
 
// Toggle function
/**
* @param {string[]} actors
*/
function toggle(actors) {   
    for (const key in actors) {
        const dataPoint = getDataPoint(actors[key], 'on'); 
        if  (dataPoint != undefined){    
            setState(dataPoint, !getState(dataPoint).val);
        }
    }
}

/**
* @param {iobJS.ChangedStateObject<any, any>} obj
* @param {string[]} actors
*/
function autoDim(obj, actors){
    // Check if the cache is available, if not one will be created 
    const cacheKey = JSON.stringify(actors);
    if (!cache[cacheKey]){
        cache[cacheKey] = { dimInterval: undefined, upDimming: true, currentBrightness: Number(getState(getDataPoint(actors[0], 'level')).val)};
    }
    
    if (obj.state.val == true){
        // Create interval
        cache[cacheKey].dimInterval = setInterval(()=>{     
            // Dim up       
            if (cache[cacheKey].upDimming == true){
                cache[cacheKey].currentBrightness = cache[cacheKey].currentBrightness + 10;               
            }   
            // Dim down     
            else{
                cache[cacheKey].currentBrightness = cache[cacheKey].currentBrightness - 10;
            }

            // Check if the current value exceeds the maximum value
            if (cache[cacheKey].currentBrightness > 100){
                cache[cacheKey].currentBrightness = 100;
                // Auto change dim direction 
                //cache[cacheKey].upDimming = false;
            }
            // Check if the current value is below the minimum value 
            else if (cache[cacheKey].currentBrightness <= 10){
                cache[cacheKey].currentBrightness = 0;
                // Auto change dim direction 
                //cache[cacheKey].upDimming = true;
            }   
            // Set state
            for (const key in actors) {
                const dataPoint = getDataPoint(actors[key], 'level'); 
                if  (dataPoint != undefined){
                    let briMin = 0, briMax = 100;
                    // Get actor
                    const actor = Actors.find(x=>x.name == actors[key]);
                    // Has an override been defined?
                    if (actor.briMin){
                        briMin = actor.briMin;
                    }
                    // Has an override been defined?
                    if (actor.briMax){
                        briMax = actor.briMax;
                    }
                    // Create reMap 
                    const reMap = createRemap(0 ,100, briMin, briMax);
                    // Set state    
                    setState(dataPoint, reMap(cache[cacheKey].currentBrightness));
                }
            } 
        }, 500);
    }    
    else{
        // On release stop dimming 
        clearInterval(cache[cacheKey].dimInterval);
        // On release change dim direction 
        cache[cacheKey].upDimming = !cache[cacheKey].upDimming;
    }
}

/**
* @param {string[]} actors
* @param {boolean} upDown
*/
function dimUpDown(actors, upDown){
    // Check if the cache is available, if not one will be created 
    const cacheKey = JSON.stringify(actors);
    if (!cache[cacheKey]){
        cache[cacheKey] = {currentBrightness: Number(getState(getDataPoint(actors[0], 'level')).val)};
    }
    // Dim up   
    if (upDown == true){
        cache[cacheKey].currentBrightness = cache[cacheKey].currentBrightness + 10;
    }
    // Dim down  
    else{
        cache[cacheKey].currentBrightness = cache[cacheKey].currentBrightness - 10;
    }
    
    // Check if the current value exceeds the maximum value
    if (cache[cacheKey].currentBrightness < 10){
        cache[cacheKey].currentBrightness = 0;
    }
    // Check if the current value is below the minimum value 
    else if (cache[cacheKey].currentBrightness > 100){
        cache[cacheKey].currentBrightness = 100;
    }
    // Set state
    for (const key in actors) {
        const dataPoint = getDataPoint(actors[key], 'level');   
        if  (dataPoint != undefined){    
            let briMin = 0, briMax = 100;
            // Get actor
            const actor = Actors.find(x=>x.name == actors[key]);
            // Has an override been defined?
            if (actor.briMin){
                briMin = actor.briMin;
            }
            // Has an override been defined?
            if (actor.briMax){
                briMax = actor.briMax;
            }
            // Create reMap 
            const reMap = createRemap(0 , 100, briMin, briMax);
            // Set state
            setState(dataPoint, reMap(cache[cacheKey].currentBrightness));
        }
    } 
}

/**
* @param {string[]} actors
* @param {boolean} openClose
*/
function openClose(actors, openClose){
    for (const key in actors) {        
        const dataPoint = getDataPoint(actors[key], 'pos'); 
        if  (dataPoint != undefined){    
            // Get actor
            const actor = Actors.find(x=>x.name == actors[key]);
            let desiredPos;
            // Open
            if (openClose == true){
                desiredPos = 100;
                // Has an override been defined?
                if (actor.posMax){
                    desiredPos = actor.posMax;
                }
            }               
            // Close
            else{
                desiredPos = 0;
                // Has an override been defined?
                if (actor.posMin){
                    desiredPos = actor.posMin;
                }               
            }
            setState(dataPoint, Number(desiredPos));
        }
    } 
}

/**
 * Create a function that maps a value to a range
 * @param {Number} inMin Input range minimun value
 * @param {Number} inMax Input range maximun value
 * @param {Number} outMin Output range minimun value
 * @param {Number} outMax Output range maximun value
 * @return {function} A function that converts a value
 */
function createRemap(inMin, inMax, outMin, outMax) {
    return function remaper(x) {
        return Number(((x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin).toFixed());
    };
}
