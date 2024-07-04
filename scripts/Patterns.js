//pattern data. angles is an array of values 0-359. grouping is the array of grouping.
//the sum of all elements in grouping must equal the length of the angles array.
class Pattern {
	angles; grouping; intensity;
	offset = Math.floor(Math.random() * 359);
	aindex = 0; gindex = 0;
	constructor(angles, grouping, intensity){
		this.angles = angles;
		this.grouping = grouping;
		this.intensity = intensity;
	}
}

//set up library of patterns
globalThis.patterns = [];
patterns.push(new Pattern([0, 180, 90, 210, 330, 0, 90, 180, 270, 0, 72, 144, 216, 288], [2, 0, 3, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 0, 0,], 140)); //this is the hardest pattern that can be rolled on hard
patterns.push(new Pattern([0, 180, 15, 195, 30, 210, 45], [1, 1, 1, 1, 1, 1, 1, 0], 137));
patterns.push(new Pattern([0, 30, 60, 120, 180, 240, 270, 300], [4, 0, 0, 0, 4, 0, 0, 0], 133));
patterns.push(new Pattern([0, 15, 30, 60, 120, 240], [1, 1, 1, 1, 1, 1, 0, 0], 130));
patterns.push(new Pattern([0, 30, 180, 210, 60, 90, 270], [1, 1, 1, 1, 1, 1, 1, 0], 126));
patterns.push(new Pattern([0, 180, 0, 180], [1, 1, 1, 1], 125)); //base intensity caps out on hard
patterns.push(new Pattern([0, 90, 180, 270, 45, 135, 225, 315], [1, 1, 1, 1, 1, 1, 1, 1], 123));
patterns.push(new Pattern([0, 90, 180, 270, 45, 135, 225, 315], [4, 0, 0, 0, 4, 0, 0, 0], 121));
patterns.push(new Pattern([0, 30, 60, 90, 120, 150, 180, 210], [1, 1, 1, 1, 1, 1, 1, 1], 119));
patterns.push(new Pattern([0, 30, 60, 180, 210, 240, 0, 180], [3, 0, 0, 3, 0, 0, 2, 0], 116));
patterns.push(new Pattern([0, 30, 60, 90, 120, 150, 180, 210], [2, 0, 2, 0, 2, 0, 2, 0], 115)); //hardest pattern on normal
patterns.push(new Pattern([0, 180], [2, 0], 114));
patterns.push(new Pattern([0, 90, 180, 270], [1, 1, 1, 1], 83));
patterns.push(new Pattern([0, 180, 15, 195, 30, 210], [2, 2, 2, 0, 0, 0, 0, 0], 110));
patterns.push(new Pattern([0, 120, 240, 0, 72, 148, 216, 288], [0, 0, 0, 0, 5, 0, 0, 0], 100)); //base intensity caps out on normal
patterns.push(new Pattern([0, 120, 240, 60, 180, 300], [3, 0, 0, 0, 3, 0, 0, 0], 97));
patterns.push(new Pattern([0, 180, 15, 195, 30, 210], [2, 0, 0, 2, 0, 0, 2, 0], 93));
patterns.push(new Pattern([0, 30, 60, 15, 45, 30], [3, 0, 2, 0, 1, 0, 0, 0], 90));
patterns.push(new Pattern([0, 15, 30, 180, 195, 210], [3, 0, 0, 3, 0, 0, 0, 0], 85));
patterns.push(new Pattern([0, 30, 330, 0], [1, 2, 1, 0], 82));
patterns.push(new Pattern([0, 90, 180, 270], [4, 0, 0, 0, 0, 0, 0, 0], 78));
patterns.push(new Pattern([0, 30, 120, 150, 240, 270], [2, 0, 2, 0, 2, 0, 0, 0], 75));
patterns.push(new Pattern([0, 60, 30, 0, 60, 30], [2, 1, 0, 2, 1, 0, 0, 0], 72));
patterns.push(new Pattern([0, 15, 30, 180, 195, 210], [3, 0, 0, 3, 0, 0, 0, 0], 69));
patterns.push(new Pattern([0, 30, 330], [3, 0, 0, 0], 66));
patterns.push(new Pattern([30, 0, 60, 30, 30], [1, 2, 1, 1, 0, 0, 0, 0], 63));
patterns.push(new Pattern([0, 180, 90], [1, 0, 2, 0], 60));
patterns.push(new Pattern([0, 45, 135, 180], [4, 0, 0, 0, 0, 0, 0, 0], 55));
patterns.push(new Pattern([0, 30, 90, 120, 180, 210, 270, 300], [2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0], 50));
patterns.push(new Pattern([0, 30, 120, 150, 240, 270], [2, 0, 0, 2, 0, 0, 2, 0], 45));
patterns.push(new Pattern([0, 120, 240], [1, 1, 1, 0], 42));
patterns.push(new Pattern([0, 30, 60], [3, 0, 0, 0], 39));
patterns.push(new Pattern([90, 75, 105, 55, 125], [1, 2, 2, 0, 0, 0, 0, 0], 36));
patterns.push(new Pattern([0, 180, 180, 180, 180, 180], [1, 1, 1, 1, 1, 1, 0, 0], 33));
patterns.push(new Pattern([345, 15, 180], [2, 1, 0, 0], 30));
patterns.push(new Pattern([0, 180], [2, 0, 0, 0], 27));
patterns.push(new Pattern([0, 90], [2, 0, 0, 0], 23));
patterns.push(new Pattern([0, 90, 180, 270], [1, 0, 1, 0, 1, 0, 1, 0], 20));
patterns.push(new Pattern([0, 30, 60, 120, 150, 180, 210, 240, 270, 330, 0, 30], [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0], 15));
patterns.push(new Pattern([0, 180], [1, 1, 0, 0], 11));
patterns.push(new Pattern([0, 0], [1, 0, 0, 1], 8));
patterns.push(new Pattern([0, 180], [1, 0, 1, 0], 5));
patterns.push(new Pattern([0, 135], [1, 1, 0, 0], 0));
patterns.push(new Pattern([0, 30], [2, 0, 0, 0], -5));
patterns.push(new Pattern([0], [1, 0, 0, 0], -15));
globalThis.currPat = patterns[patterns.length - 1];

//special patterns that require a powerup to be possible
globalThis.overloadedPatterns = [];
overloadedPatterns.push(new Pattern([0], [0], -20));
overloadedPatterns.push(new Pattern([0, 45, 90, 135, 180, 225, 270, 315], [8, 0, 0, 0], 250));
overloadedPatterns.push(new Pattern([0, 90, 180, 270, 45, 135, 225, 315], [4, 0, 4, 0], 240));
overloadedPatterns.push(new Pattern([0, 45, 90, 135, 180, 225, 270, 315], [2, 2, 2, 2], 230));
overloadedPatterns.push(new Pattern([0, 60, 120, 180, 240, 300], [6, 0, 0, 0], 210));
overloadedPatterns.push(new Pattern([0, 120, 240, 60, 180, 300], [3, 0, 3, 0], 200));

globalThis.currIntensity = 0;
globalThis.intensityModifier = 0;
globalThis.failStreak = 0;	//number of consecutive losses
globalThis.completed = [0, 0, 0, 0, 0, 0]; //which levels have been finished