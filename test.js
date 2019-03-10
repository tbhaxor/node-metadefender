let Defender = require('./dist').default;

let d = new Defender("4e0be72f618b6484718f0127445fd23c");
d.getApiLimits().then(console.log)