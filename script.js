// Define actions
const Act = {
    Toggle:     1, 
    On:         2, 
    Off:        3,
    OnOff:      4,
    OnOffForce: 5,
    OnForce:    6,
    OffForce:   7,
    AutoDim:    8,
    AutoDimMove:81,
    DimUp:      9,
    DimDown:    10,
    Open:       11,
    Close:      12,
    TimeOut:    13,
    OnTimer:    14,
    OffTimer:   15,
    VolUp:      16,
    VolDown:    17,
};

// Define actors
const Actors = [
    // eg. {name: '', id: '', on: '', ct: '', color: '', pos:'', posMin: 0, posMax: 100, bri: '', briMin:0, briMax: 100},
    //Flur
    {name: 'FL.Licht.Decke.Hinten', id: 'zigbee.0.0017880102a096e5'},
    {name: 'FL.Licht.Decke.Vorne', id: 'zigbee.0.0017880102eebc0b'},
    {name: 'FL.Licht.Decke', id: 'zigbee.0.group_2'},
    {name: 'FL.Licht.Links', id: 'zigbee.0.84182600000c6dfd'},
    // Küche
    {name: 'KU.Licht.Deckenleuchte', id: 'zigbee.0.group_1', briMin: 1},
    {name: 'KU.Licht.Deckenleuchte.1', id: 'zigbee.0.842e14fffe2304a1', briMin: 1},
    {name: 'KU.Licht.Deckenleuchte.2', id: 'zigbee.0.588e81fffee3b050', briMin: 1},
    {name: 'KU.Licht.Deckenleuchte.3', id: 'zigbee.0.588e81fffed3eddd', briMin: 1},
    {name: 'KU.Licht.Arbeitsplatte', id: 'zigbee.0.group_3'},
    {name: 'KU.Licht.Arbeitsplatte.Links',  id: 'zigbee.0.842e14fffef598d3'},
    {name: 'KU.Licht.Arbeitsplatte.Rechts', id: 'zigbee.0.84182600000c9c50'},
    // Wohnzimmer
    {name: 'WZ.Licht.Pflanzenleuchte', id: 'zigbee.0.ec1bbdfffefb20c1'},
    {name: 'WZ.Licht.Fensterbank', id: 'zigbee.0.84182600000c77dd'},
    {name: 'WZ.Licht.StandLampe', id: 'zigbee.0.588e81fffedb8b1a', briMin: 1},   
    {name: 'WZ.Geraet.Sonos', id: 'sonos.0.root.192_168_0_124'},    
    // Kinderzimmer
    {name: 'KZ.Licht.Betthimmel', id: 'zigbee.0.8418260000101f8c'},
    {name: 'KZ.Licht.Disco', id: 'zigbee.0.841826000010328a'},
    {name: 'KZ.Licht.Decke', id: 'zigbee.0.842e14fffe1f08e7', briMin: 1},   
    {name: 'KZ.Geraet.Sonos', id: 'sonos.0.root.192_168_0_125'},   
    // Schlafzimmer
    {name: 'SZ.Licht.Bett', id: 'zigbee.0.588e81fffefea724'},
    {name: 'SZ.Blind.Links', id: 'zigbee.0.680ae2fffe974af1', posMax: 90},
    {name: 'SZ.Blind.Rechts', id: 'zigbee.0.680ae2fffe54a2ba', posMax: 90},
    // Terrasse
    {name: 'TR.Licht.GardenPole', id: 'zigbee.0.7cb03eaa00a9572e', briMin: 1},   
    // Büro
    {name: 'BU.Blind', id: 'zigbee.0.680ae2fffeed55f6', posMax: 97},
    {name: 'BU.Geraet.Sonos', id: 'sonos.0.root.192_168_0_128'},    
];
 
// Define sensors
const Sensors = [
    // eg. {name: '', id: ''},
    //Flur
    {name: 'FL.Sensor.Taster.UP.Hinten', id: 'zigbee.0.5c0272fffe3f3d82'},
    {name: 'FL.Sensor.Taster.UP.Vorne', id: 'zigbee.0.5c0272fffe3f3f29'},
    // Küche
    {name: 'KU.Sensor.Taster', id: 'zigbee.0.00158d00027bd7e1'},
    {name: 'KU.Sensor.PIR', id: 'zigbee.0.00158d000276e21e'},
    // Büro
    {name: 'BU.Sensor.Taster.Free', id: 'zigbee.0.00158d00027c1027'},
    {name: 'BU.Sensor.Taster.OpenClose', id: 'zigbee.0.680ae2fffeaca6fa'},
    {name: 'BU.SoundContoller', id: 'zigbee.0.ec1bbdfffea28e78'},
    // Kinderzimmer
    {name: 'KZ.Sensor.Taster', id: 'zigbee.0.00158d00027c1ca4'},
    {name: 'KZ.Sensor.Taster.UP', id: 'zigbee.0.5c0272fffe3c2124'},
    {name: 'KZ.Sensor.Fernbedienung', id: 'zigbee.0.ec1bbdfffea9bb02'},
    {name: 'KZ.SoundContoller', id: 'zigbee.0.ec1bbdfffe94a189'},
    // Wohnzimmer
    {name: 'WZ.Sensor.Fernbedienung', id: 'zigbee.0.00178801080cf9f9'},
    {name: 'WZ.SoundContoller', id: 'zigbee.0.ec1bbdfffe9ebfa2'},
    // Terrasse
    {name: 'TR.Sensor.Tuer', id: 'zigbee.0.00158d0002529347'},   
    // Schlafzimmer
    {name: 'SZ.Sensor.Taster.OpenClose', id: 'zigbee.0.680ae2fffe549bb6'},
];
 
// Definde events
const Events = [
    // eg.  {sensor: '', events: ['',''], actors: ['',''], action: ''}, current available [ toggle, on, off, onForce, offForce, autoDim, dimUp, dimDown, open, close, timeOut:sec, onTimer, offTimer ]
    //// Küche
    {sensor: 'KU.Sensor.Taster', events: ['right_click'], actors: ['KU.Licht.Arbeitsplatte.Links'], action: Act.Toggle},
    {sensor: 'KU.Sensor.Taster', events: ['left_click'], actors: ['KU.Licht.Arbeitsplatte.Rechts'], action: Act.Toggle},
    {sensor: 'KU.Sensor.Taster', events: ['both_click'], actors: ['KU.Licht.Deckenleuchte'], action: Act.Toggle},
    {sensor: 'KU.Sensor.PIR', events: ['occupancy'], actors: ['KU.Licht.Arbeitsplatte.Links'], action: Act.On},
    //// Kinderzimmer
    {sensor: 'KZ.Sensor.Taster', events: ['left_click'], actors: ['KZ.Licht.Disco'], action: Act.Toggle},
    {sensor: 'KZ.Sensor.Taster', events: ['right_click'], actors: ['KZ.Licht.Betthimmel'], action: Act.Toggle},
    {sensor: 'KZ.Sensor.Taster.UP', events: ['state'], actors: ['KZ.Licht.Decke'], action: Act.Toggle},
    {sensor: 'KZ.Sensor.Taster.UP', events: ['up_button'], actors: ['KZ.Licht.Decke'], action: Act.AutoDimMove},
    {sensor: 'KZ.SoundContoller', events: ['button_play_pause'], actors: ['KZ.Geraet.Sonos'], action: Act.Toggle},
    {sensor: 'KZ.SoundContoller', events: ['rotate_right'], actors: ['KZ.Geraet.Sonos'], action: Act.VolUp},
    {sensor: 'KZ.SoundContoller', events: ['rotate_left'], actors: ['KZ.Geraet.Sonos'], action: Act.VolDown},
    //// Schlafzimmer
    {sensor: 'SZ.Sensor.Taster.OpenClose', events: ['cover_open'], actors: ['SZ.Blind.Links', 'SZ.Blind.Rechts'], action: Act.Open},
    {sensor: 'SZ.Sensor.Taster.OpenClose', events: ['cover_close'], actors: ['SZ.Blind.Links', 'SZ.Blind.Rechts'], action: Act.Close},
    //// Büro
    {sensor: 'BU.Sensor.Taster.OpenClose', events: ['cover_open'], actors: ['BU.Blind'], action: Act.Open},
    {sensor: 'BU.Sensor.Taster.OpenClose', events: ['cover_close'], actors: ['BU.Blind'], action:  Act.Close},
    {sensor: 'BU.SoundContoller', events: ['button_play_pause'], actors: ['BU.Geraet.Sonos'], action: Act.Toggle},
    {sensor: 'BU.SoundContoller', events: ['rotate_right'], actors: ['BU.Geraet.Sonos'], action: Act.VolUp},
    {sensor: 'BU.SoundContoller', events: ['rotate_left'], actors: ['BU.Geraet.Sonos'], action: Act.VolDown},
    //// Wohnzimmer
    {events: ['08:00:00'], actors: ['WZ.Licht.Pflanzenleuchte'], action: Act.OnTimer},
    {events: ['18:00:00'], actors: ['WZ.Licht.Pflanzenleuchte'], action: Act.OffTimer},
    {sensor: 'WZ.Sensor.Fernbedienung', events: ['state'], actors: ['WZ.Licht.StandLampe'], action:  Act.OnOff},
    {sensor: 'WZ.Sensor.Fernbedienung', events: ['up_button', 'up_hold'], actors: ['WZ.Licht.StandLampe'], action:  Act.DimUp},
    {sensor: 'WZ.Sensor.Fernbedienung', events: ['down_button', 'down_hold'], actors: ['WZ.Licht.StandLampe'], action:  Act.DimDown},
    {sensor: 'WZ.SoundContoller', events: ['button_play_pause'], actors: ['WZ.Geraet.Sonos'], action: Act.Toggle},
    {sensor: 'WZ.SoundContoller', events: ['rotate_right'], actors: ['WZ.Geraet.Sonos'], action: Act.VolUp},
    {sensor: 'WZ.SoundContoller', events: ['rotate_left'], actors: ['WZ.Geraet.Sonos'], action: Act.VolDown},
    //// Flur
    {sensor: 'FL.Sensor.Taster.UP.Vorne', events: ['state'], actors: ['FL.Licht.Decke'], action: Act.Toggle},
    {sensor: 'FL.Sensor.Taster.UP.Vorne', events: ['up_button'], actors: ['FL.Licht.Decke'], action: Act.AutoDimMove},
    {sensor: 'FL.Sensor.Taster.UP.Hinten', events: ['state'], actors: ['FL.Licht.Decke'], action: Act.Toggle},
    {sensor: 'FL.Sensor.Taster.UP.Hinten', events: ['up_button'], actors: ['FL.Licht.Decke'], action:  Act.AutoDimMove},
    //// Terrasse
    //{sensor: 'TR.Sensor.Tuer', events: ['opened'], actors: ['TR.Licht.GardenPole'], action:  Act.OnOff},
];

/////////////////////////////////////////////////// Logic ////////////////////////////////////////////////////////////////////
const cache = [];

// Register events
// Are on or off events actions defined? 
const onOffEvents = Events.filter(x => x.action == Act.On || x.action == Act.Off || x.action == Act.OnOff);
if (onOffEvents) {
    // Get actor names array from objekt
    const actors = onOffEvents.map(x => x.actors);
    
    // Create array of actor names
    let actorNames = [];
    for (const uKey in actors) {        
        for (const uuKey in actors[uKey]) {     
            actorNames.push(actors[uKey][uuKey])     
        }     
    }
    // Filter actor names of unique
    actorNames = actorNames.filter(onlyUnique);
    // Register event
    for (const key in actorNames) {
        const dataPoint = getDataPoint(actorNames[key], 'on')
        // Init cache object
        if (!cache[actorNames[key]]) {
            cache[actorNames[key]] = {};
            cache[actorNames[key]].state = getState(dataPoint).val;
        }
        on ({id: dataPoint,  change: 'ne'}, (obj) => {            
            cache[actorNames[key]].state = obj.state.val;         
        }); 
    }           
}

// Register events
// Are open or close events (blind) actions defined? 
const openCloseEvents = Events.filter(x => x.action == Act.Open || x.action == Act.Close);
if (openCloseEvents) {
    // Get actor names array from objekt
    const actors = openCloseEvents.map(x => x.actors);
    
    // Create array of actor names
    let actorNames = [];
    for (const uKey in actors) {        
        for (const uuKey in actors[uKey]) {     
            actorNames.push(actors[uKey][uuKey])     
        }     
    }
    // Filter actor names of unique
    actorNames = actorNames.filter(onlyUnique);
    // Register event
    for (const key in actorNames) {  
        on ({id: getDataPoint(actorNames[key], 'pos'),  change: 'ne'}, (obj) => {                                  
            openClose([actorNames[key]], undefined, obj);         
        }); 
    }           
}

// Run through each event definetion
for (const key in Events) {
    const sensor = Sensors.find(x => x.name == Events[key].sensor);
    const events = Events[key].events; 
    
    // Run through each events
    for (const eKey in events) {       
        let triggerDp;
        if (sensor){
            triggerDp = `${sensor.id}.${events[eKey]}`;
        }

        const actors = Events[key].actors;
        const action = Events[key].action;

        // Time schedule
        if (action == Act.OnTimer || action == Act.OffTimer){          
            const timeSplit = events[eKey].split(':');            
            let scheduleTime = {time:{}};
            scheduleTime.time.hour  = Number(timeSplit[0]);
            scheduleTime.time.minute = Number(timeSplit[1]);
            if (timeSplit[2]){
                scheduleTime.time.second = Number(timeSplit[2])
            }            

            on(scheduleTime, function () {
               setOnOff(actors, (action == Act.OnTimer), true);
            });
        }

        // Toogle event register
        if (action == Act.Toggle) {
            on ({id: triggerDp, val: true}, (obj) => {
                toggle(actors);
            });
        }
    
        // On and Off event register
        else if (action == Act.On || action == Act.Off) {
            on ({id: triggerDp, val: true}, (obj) => {
                setOnOff(actors, (action == Act.On), false);
            });
        }

        // On event register
        else if (action == Act.OnForce) {
            on ({id: triggerDp, val: true}, (obj) => {
                setOnOff(actors, true, true);
            });
        } 
        
        // Off event register
        else if (action == Act.OffForce) {
            on ({id: triggerDp, val: true}, (obj) => { 
                setOnOff(actors, false, true);
            });
        }

        // OnOff event register
        else if (action == Act.OnOffForce) {
            on ({id: triggerDp}, (obj) => { 
                setOnOff(actors, obj.state.val, true);
            });
        }

        // OnOff event register
        else if (action == Act.OnOff) {
            on ({id: triggerDp}, (obj) => { 
                setOnOff(actors, obj.state.val, false);
            });
        }

        // AutoDim event register
        else if (action == Act.AutoDimMove) {
            on ({id: triggerDp}, (obj) => { 
                autoDimMove(actors, obj);
            });
        }

        // AutoDim event register
        else if (action == Act.AutoDim) {
            on ({id: triggerDp}, (obj) => { 
                autoDim(actors, obj);
            });
        }

        // DimUp event register
        else if (action == Act.DimUp) {
            on ({id: triggerDp, val: true}, (obj) => { 
                dimUpDown(actors, true);
            });
        }

        // DimDown event register
        else if (action == Act.DimDown) {
            on ({id: triggerDp, val: true}, (obj) => { 
                dimUpDown(actors, false);
            });
        }

        // VolUp event register
        else if (action == Act.VolUp) {
            on ({id: triggerDp, val: true}, (obj) => { 
                volUpDown(actors, true);
            });
        }

        // VolDown event register
        else if (action == Act.VolDown) {
            on ({id: triggerDp, val: true}, (obj) => { 
                volUpDown(actors, false);
            });
        }
        // Open (Blind) event register
        else if (action == Act.Open) {
            on ({id: triggerDp, val: true}, (obj) => { 
                openClose(actors, true, undefined);
            });
        }

        // Close (Blind) event register
        else if (action == Act.Close) {
            on ({id: triggerDp, val: true}, (obj) => { 
                openClose(actors, false, undefined);
            });
        }
    }
}

// Create datapoint string
/**
* @param {string} actorName
* @param {string} control
*/
function getDataPoint(actorName, control) {
    let dataPoint;
    const actor = Actors.find(x=>x.name == actorName)    
    // Has an override been defined?
    if (actor[control] != undefined) {
        dataPoint =  `${actor.id}.${actor[control]}`;        
    }
    else {
        // Zigbee actor
        if (actor.id.startsWith('zigbee')) {
            if (control == 'on') {
                dataPoint =  `${actor.id}.state`;
            }
            else if (control == 'bri') {
                dataPoint = `${actor.id}.brightness`;
            }
            else if (control == 'bri_move') {
                dataPoint = `${actor.id}.brightness_move`;
            }
            else if (control == 'ct') {
                dataPoint = `${actor.id}.colortemp`;
            }
            else if (control == 'color') {
                dataPoint = `${actor.id}.color`;
            }
            else if (control == 'pos') {
                dataPoint = `${actor.id}.position`;
            }
            else if (control == 'stop') {
                dataPoint = `${actor.id}.stop`;
            }
        }

        // WLED Actor
        else if (actor.id.startsWith('wled')) {
            if (control == 'on') {
                dataPoint = `${actor.id}.on`;
            }
            else if (control == 'bri') {
                dataPoint = `${actor.id}.bri`;
            }
            else if (control == 'color') {
                dataPoint = `${actor.id}.seg.0.col.0_HEX`;
            }
        }

         // Sonoff Actor
        else if (actor.id.startsWith('sonoff')) {
            if (control == 'on') {
                dataPoint = `${actor.id}.POWER`;
            }            
        }

         // Sonos Actor
        else if (actor.id.startsWith('sonos')) {
            if (control == 'play') {
                dataPoint = `${actor.id}.play`;
            }
            else if (control == 'pause') {
                dataPoint = `${actor.id}.pause`;
            }
            else if (control == 'stop') {
                dataPoint = `${actor.id}.stop`;
            }
            else if (control == 'next') {
                dataPoint = `${actor.id}.next`;
            }
            else if (control == 'prev') {
                dataPoint = `${actor.id}.prev`;
            }
            else if (control == 'muted') {
                dataPoint = `${actor.id}.muted`;
            }
            else if (control == 'vol') {
                dataPoint = `${actor.id}.volume`;
            } 
            else if (control == 'on') {
                dataPoint = `${actor.id}.state_simple`;
            }            
        }
    }

    if (!existsState(dataPoint)) {
        log(`(${dataPoint}) State: ${control} for Device: ${actor.name} rejected, state not exist!`, 'warn')
        return undefined;
    }
   
    return dataPoint;
}

// On or off function
/**
* @param {string[]} actors
* @param {boolean} onOff
+ @param {boolean} force
*/
function setOnOff(actors, onOff, force) {
    for (const key in actors) {
        const dataPoint = getDataPoint(actors[key], 'on'); 
        if (dataPoint != undefined) {     
            if (force == true) {
                setState(dataPoint, onOff);
                log(`setOnOff force -> set ${actors[key]} of ${onOff}`);
            }
            else {                
                if (cache[actors[key]].state != onOff) {
                    setState(dataPoint, onOff);
                    log(`setOnOff -> set ${actors[key]} of ${onOff}`);
                }
            }
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
        if  (dataPoint != undefined) {
            const currentState = getState(dataPoint).val;
            setState(dataPoint, !currentState);
            log(`toggle -> set ${actors[key]} of ${!currentState}`);
        }
    }
}

function autoDimMove(actors, obj) {
    const cacheKey = JSON.stringify(actors);
    if (!cache[cacheKey]) {
        cache[cacheKey] = {};
        cache[cacheKey].upDimming= true;
    }

    if (obj.state.val == true) {      
        for (const key in actors) {
            if (cache[cacheKey].upDimming == true) {
                // Set state    
                setState(getDataPoint(actors[key], 'bri_move'), 35);
                log(`autoDimMove -> set ${actors[key]} dim up`);   
            } 
            else{
                // Set state    
                setState(getDataPoint(actors[key], 'bri_move'), -35);
                    log(`autoDimMove -> set ${actors[key]} dim down`);   
            }         
        }
    } else {
        // On release change dim direction 
        cache[cacheKey].upDimming = !cache[cacheKey].upDimming;
        for (const key in actors) {
            setState(getDataPoint(actors[key], 'bri_move'), 0);
            log(`autoDimMove -> set ${actors[key]} dim stop`);          
        }          
    }
}


/**
* @param {iobJS.ChangedStateObject<any, any>} obj
* @param {string[]} actors
*/
function autoDim(actors, obj) {
    // Check if the cache is available, if not one will be created 
    const cacheKey = JSON.stringify(actors);
    if (!cache[cacheKey]) {
        cache[cacheKey] = {};
        cache[cacheKey].upDimming= true;
        cache[cacheKey].currentBrightness = Number(getState(getDataPoint(actors[0], 'bri')).val);
    }
    
    if (obj.state.val == true) {
        // Create interval
        cache[cacheKey].dimInterval = setInterval(() => {     
            // Dim up       
            if (cache[cacheKey].upDimming == true) {
                cache[cacheKey].currentBrightness = cache[cacheKey].currentBrightness + 10;               
            }   
            // Dim down     
            else{
                cache[cacheKey].currentBrightness = cache[cacheKey].currentBrightness - 10;
            }

            // Check if the current value exceeds the maximum value
            if (cache[cacheKey].currentBrightness > 100) {
                cache[cacheKey].currentBrightness = 100;
                // Auto change dim direction 
                //cache[cacheKey].upDimming = false;
            }
            // Check if the current value is below the minimum value 
            else if (cache[cacheKey].currentBrightness < 10) {
                cache[cacheKey].currentBrightness = 0;
                // Auto change dim direction 
                //cache[cacheKey].upDimming = true;
            }   
            // Set state
            for (const key in actors) {
                const dataPoint = getDataPoint(actors[key], 'bri'); 
                if  (dataPoint != undefined) {
                    let briMin = 0, briMax = 100;
                    // Get actor
                    const actor = Actors.find(x=>x.name == actors[key]);
                    // Has an override been defined?
                    if (actor.briMin) {
                        briMin = actor.briMin;
                    }
                    // Has an override been defined?
                    if (actor.briMax) {
                        briMax = actor.briMax;
                    }
                    // Create reMap 
                    const reMap = createRemap(0, 100, briMin, briMax);
                    // Set state    
                    setState(dataPoint, reMap(cache[cacheKey].currentBrightness));
                    log(`autoDim -> set ${actors[key]} of ${reMap(cache[cacheKey].currentBrightness)}%`);
                }
            } 
        }, 500);
    }    
    else {
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
function dimUpDown(actors, upDown) {
    // Check if the cache is available, if not one will be created 
    const cacheKey = JSON.stringify(actors);
    if (!cache[cacheKey]) {
        cache[cacheKey] = {};
        cache[cacheKey].currentBrightness = Number(getState(getDataPoint(actors[0], 'bri')).val);
    }
    // Dim up   
    if (upDown == true) {
        cache[cacheKey].currentBrightness = cache[cacheKey].currentBrightness + 10;
    }
    // Dim down  
    else{
        cache[cacheKey].currentBrightness = cache[cacheKey].currentBrightness - 10;
    }
    
    // Check if the current value exceeds the maximum value
    if (cache[cacheKey].currentBrightness < 10) {
        cache[cacheKey].currentBrightness = 0;
    }
    // Check if the current value is below the minimum value 
    else if (cache[cacheKey].currentBrightness > 100) {
        cache[cacheKey].currentBrightness = 100;
    }
    // Set state
    for (const key in actors) {
        const dataPoint = getDataPoint(actors[key], 'bri');   
        if  (dataPoint != undefined) {    
            let briMin = 0, briMax = 100;
            // Get actor
            const actor = Actors.find(x=>x.name == actors[key]);
            // Has an override been defined?
            if (actor.briMin) {
                briMin = actor.briMin;
            }
            // Has an override been defined?
            if (actor.briMax) {
                briMax = actor.briMax;
            }
            // Create reMap 
            const reMap = createRemap(0 , 100, briMin, briMax);
            // Set state
            setState(dataPoint, reMap(cache[cacheKey].currentBrightness));
            log(`dimUpDown -> set ${actors[key]} of ${reMap(cache[cacheKey].currentBrightness)}%`);
        }
    } 
}

/**
* @param {string[]} actors
* @param {boolean} upDown
*/
function volUpDown(actors, upDown) {
    // Check if the cache is available, if not one will be created 
    const cacheKey = JSON.stringify(actors);
    const stepSize = 2;
    if (!cache[cacheKey]) {
        cache[cacheKey] = {};
        cache[cacheKey].currentVolume = Number(getState(getDataPoint(actors[0], 'vol')).val);
    }
    // Vol up   
    if (upDown == true) {
        cache[cacheKey].currentVolume = cache[cacheKey].currentVolume + stepSize;
    }
    // Vol down  
    else{
        cache[cacheKey].currentVolume = cache[cacheKey].currentVolume - stepSize;
    }
    
    // Check if the current value exceeds the maximum value
    if (cache[cacheKey].currentVolume < stepSize) {
        cache[cacheKey].currentVolume = 0;
    }
    // Check if the current value is below the minimum value 
    else if (cache[cacheKey].currentVolume > 100) {
        cache[cacheKey].currentVolume = 100;
    }
    // Set state
    for (const key in actors) {
        const dataPoint = getDataPoint(actors[key], 'vol');   
        if  (dataPoint != undefined) {    
            let volMin = 0, volMax = 100;
            // Get actor
            const actor = Actors.find(x=>x.name == actors[key]);
            // Has an override been defined?
            if (actor.volMin) {
                volMin = actor.volMin;
            }
            // Has an override been defined?
            if (actor.volMax) {
                volMax = actor.volMax;
            }
            // Create reMap 
            const reMap = createRemap(0 , 100, volMin, volMax);
            // Set state
            setState(dataPoint, reMap(cache[cacheKey].currentVolume));
            log(`volUpDown -> set ${actors[key]} of ${reMap(cache[cacheKey].currentVolume)}%`);
        }
    } 
}

/**
* @param {string[]} actors
* @param {boolean} openClose
* @param {iobJS.ChangedStateObject<any, any>} eventObj
*/
function openClose(actors, openClose, eventObj) {
    // Run through each actor
    for (const key in actors) {   
        // Get actor
        const actor = Actors.find(x => x.name == actors[key]);  

        // If no cache is defined for the actor name,
        // define cache and register event
        if (!cache[actor.name]) {
            // Define cache object
            cache[actor.name] = {};
            cache[actor.name].posMin = 0;
            cache[actor.name].posMax = 100;
            
            if (openClose != undefined){
                cache[actor.name].openRun = openClose;
                cache[actor.name].closeRun = !openClose;
            }
            else{
                cache[actor.name].openRun = false;
                cache[actor.name].closeRun = false;
            }            

            // Has an override been defined?
            if (actor.posMax) {
                 cache[actor.name].posMax = actor.posMax;
            }
            if (actor.posMin) {
                cache[actor.name].posMin = actor.posMin;
            }            
        }

        // Accept position updates only if they do not come from the JavaScript adapter.
        if (openClose == undefined && !eventObj.state.from.includes('adapter.javascript')) { 
            if (Number(eventObj.state.val) == cache[actor.name].posMin) {
                cache[actor.name].closeRun = false;  
            }
            if (Number(eventObj.state.val) == cache[actor.name].posMax) {
                cache[actor.name].openRun = false;                  
            }
            continue;
        }       

        // Get datapoint
        const dataPoint = getDataPoint(actor.name, 'pos'); 
        const stopDataPoint = getDataPoint(actor.name, 'stop');
        if (stopDataPoint != undefined && dataPoint != undefined && openClose != undefined) {  
            let desiredPos;
            // Open
            if (openClose == true) {
                // Is he already opening?
                if (cache[actor.name].openRun == true) {   
                    cache[actor.name].openRun = false;                 
                    setState(stopDataPoint, true);
                    log(`openClose -> stop ${actors[key]} opening`);
                    continue;
                }
                // Set desired position open
                desiredPos = cache[actor.name].posMax;
                // Set active direction
                cache[actor.name].closeRun = false;  
                cache[actor.name].openRun = true;
            }               
            // Close
            else {
                // Is he already closing?
                if (cache[actor.name].closeRun == true) {   
                    cache[actor.name].closeRun = false;                 
                    setState(stopDataPoint, true);
                    log(`openClose -> stop ${actors[key]} closing`);
                    continue;
                }
                // Set desired position close
                desiredPos = cache[actor.name].posMin;
                // Set active direction
                cache[actor.name].closeRun = true;  
                cache[actor.name].openRun = false;           
            }            
            // Set datapoint
            setState(dataPoint, Number(desiredPos));
            log(`openClose -> set ${actors[key]} of ${desiredPos}%`);
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

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
