////////// ToDo //////////
//
// - Colortemp handling
// - Color handling
// - NightTime handling 
// - Blinds handling
//
//////////////////////////

// Define actors
const actors = [
    // eg. {name: '', id: '', on: '', level: '', ct: '', color: ''},
    //Flur
    {name: 'FL.Licht.Decke.Hinten', id: 'zigbee.0.0017880102a096e5'},
    {name: 'FL.Licht.Decke.Vorne', id: 'zigbee.0.0017880102eebc0b'},
    {name: 'FL.Licht.Links', id: 'zigbee.0.84182600000c6dfd'},
    // Küche
    {name: 'KU.Licht.Deckenleuchte', id: 'zigbee.0.group_1'},
    {name: 'KU.Licht.Deckenleuchte.1', id: 'zigbee.0.842e14fffe2304a1'},
    {name: 'KU.Licht.Deckenleuchte.2', id: 'zigbee.0.588e81fffee3b050'},
    {name: 'KU.Licht.Deckenleuchte.3', id: 'zigbee.0.588e81fffed3eddd'},
    {name: 'KU.Licht.Arbeitsplatte', id: 'zigbee.0.group_3'},
    {name: 'KU.Licht.Arbeitsplatte.Links',  id: 'zigbee.0.7cb03eaa00b1a4bf'},
    {name: 'KU.Licht.Arbeitsplatte.Rechts', id: 'zigbee.0.84182600000c9c50'},
    // Wohnzimmer
    {name: 'WZ.Licht.Fensterbank', id: 'zigbee.0.84182600000c77dd'},
    {name: 'WZ.Licht.StandLampe', id: 'zigbee.0.588e81fffedb8b1a'},    
    // Kinderzimmer
    {name: 'KZ.Licht.Betthimmel', id: 'zigbee.0.8418260000101f8c'},
    {name: 'KZ.Licht.Disco', id: 'zigbee.0.841826000010328a'},
    {name: 'KZ.Licht.Decke', id: 'zigbee.0.842e14fffe1f08e7'},   
    // Schlafzimmer
    {name: 'SZ.Licht.Bett', id: 'zigbee.0.588e81fffefea724'},
    // Terrasse
    {name: 'TR.Licht.GardenPole', id: 'zigbee.0.7cb03eaa00a9572e'},   
];
 
// Define sensors
const sensors = [
    // eg. {name: '', id: ''},
    //Flur
    {name: 'FL.Licht.Decke.Hinten', id: ''}, // Todo
    {name: 'FL.Licht.Decke.Vorne', id: ''}, // Todo
    // Küche
    {name: 'KU.Sensor.Taster', id: 'zigbee.0.00158d00027bd7e1'},
    // Büro
    {name: 'BU.Sensor.Taster.Free', id: 'zigbee.0.00158d00027c1027'},
    {name: 'BU.Sensor.Taster.OpenClose', id: 'zigbee.0.680ae2fffeaca6fa'}, // Todo
    // Kinderzimmer
    {name: 'KZ.Sensor.Taster', id: 'zigbee.0.00158d00027c1ca4'},
    {name: 'KZ.Sensor.Taster.UP', id: 'zigbee.0.5c0272fffe3c2124'},
    {name: 'KZ.Sensor.Fernbedienung', id: 'zigbee.0.ec1bbdfffea53484'},
    // Wohnzimmer
    {name: 'WZ.Sensor.Taster.Dimmer', id: 'zigbee.0.00178801080cf9f9'},
    // Schlafzimmer
    {name: 'SZ.Sensor.Taster.OpenClose', id: 'zigbee.0.680ae2fffe549bb6'},   
    
];
 
// Definde events
const events = [
    // eg.  {sensor: '', event: '', actors: ['',''], action: ''}, current available [ toggle, on, off, autoDim ]
    // Küche
    {sensor: 'KU.Sensor.Taster', event: 'right_click', actors: ['KU.Licht.Arbeitsplatte.Links'], action: 'toggle'},
    {sensor: 'KU.Sensor.Taster', event: 'left_click', actors: ['KU.Licht.Arbeitsplatte.Rechts'], action: 'toggle'},
    {sensor: 'KU.Sensor.Taster', event: 'both_click', actors: ['KU.Licht.Deckenleuchte'], action: 'toggle'},
    // Kinderzimmer
    {sensor: 'KZ.Sensor.Taster', event: 'left_click', actors: ['KZ.Licht.Disco'], action: 'toggle'},
    {sensor: 'KZ.Sensor.Taster', event: 'right_click', actors: ['KZ.Licht.Betthimmel'], action: 'toggle'},
    {sensor: 'KZ.Sensor.Taster.UP', event: 'state', actors: ['KZ.Licht.Decke'], action: 'toggle'},
    {sensor: 'KZ.Sensor.Taster.UP', event: 'up_button', actors: ['KZ.Licht.Decke'], action: 'autoDim'},
];

/////////////////////////////////////////////////// Logic ////////////////////////////////////////////////////////////////////
//
const cache = [];

// Register events
for (const key in events) {
    const sensor = sensors.find(x=>x.name == events[key].sensor);
    const triggerdp = sensor.id + '.' + events[key].event;    
    const actors = events[key].actors;
    
    // Toogle event register
    if (events[key].action == 'toggle') {
        on ({id: triggerdp, val: true}, (obj)=> {
            toggle(actors);
        });
    }
   
    // On event register
    else if (events[key].action == 'on') {
        on ({id: triggerdp, val: true}, (obj)=> {
            setOnOff(actors, true);
        });
    } 
    
    // Off event register
    else if (events[key].action == 'off') {
        on ({id: triggerdp, val: true}, (obj)=> { 
            setOnOff(actors, false);
        });
    }

    // AutoDim event register
    else if (events[key].action == 'autoDim') {
        on ({id: triggerdp}, (obj)=> { 
            autoDim(obj, actors);
        });
    }
}

// Create datapoint string
/**
* @param {string} actorName
* @param {string} control
*/
function getDataPoint(actorName, control){    
    let dataPoint;
    const actor = actors.find(x=>x.name == actorName)    
    // Wurde ein override defineiert?
    if (actor[control] != undefined){
        return `${actor.id}.${actor[control]}`;        
    }

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
    }

    // WLED Actor
    else if (actor.id.startsWith('wled')){
        if (control == 'on'){
            dataPoint = `${actor.id}.on`;
        }
        else if (control == 'level'){
            dataPoint = `${actor.id}.bri`;
        }
        //else if (control == 'ct'){
        //    dataPoint = `${actor.id}.colortemp`;
        // }
        else if (control == 'color'){
            dataPoint = `${actor.id}.seg.0.col.0_HEX`;
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
    const cacheKey = JSON.stringify(actors);
    if (!cache[cacheKey]){
        cache[cacheKey] = { dimInterval: undefined, upDimm: true, currentBrightness: Number(getState(actors[0]).val)};
    }
    
    if (obj.state.val === true){
        cache[cacheKey].dimInterval = setInterval(()=>{
            if (cache[cacheKey].upDimming){
                cache[cacheKey].currentBrightness = cache[cacheKey].currentBrightness + 10;               
            }        
            else{
                cache[cacheKey].currentBrightness = cache[cacheKey].currentBrightness - 10;
            }

            if (cache[cacheKey].currentBrightness >= 100){
                cache[cacheKey].currentBrightness = 100;
                // Auto change dim direction 
                //cache[cacheKey].upDimming = false;
            }
            else if (cache[cacheKey].currentBrightness <= 10){
                cache[cacheKey].currentBrightness = 2;
                // Auto change dim direction 
                //cache[cacheKey].upDimming = true;
            }   

            for (const key in actors) {
                const dataPoint = getDataPoint(actors[key], 'level'); 
                if  (dataPoint != undefined){    
                    setState(dataPoint, cache[cacheKey].currentBrightness)
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

