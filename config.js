var config = {};


config.offlineKey = process.env.OFFLINEKEY;
config.offlineKeyOffset = process.env.OFFLINEKEYOFFSET;

config.sslKey = __dirname+"/ssl-key.pem";
config.sslCert = __dirname+"/ssl-cert.pem";

config.alexaSkillGatewayURL = "/august/alexa";
config.baseURL = "/august/control";
//config.httpsServerPort = 8443; //comment if no https server required (https used by alexa skill)
config.httpServerPort = process.env.PORT || 8080; //comment if no http server required (http used by fauxmo)

config.autolockTime = 60;



module.exports = config;
