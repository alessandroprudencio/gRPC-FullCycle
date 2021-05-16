const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + '/../protos/user.proto';
const loaderConfig = require('../protos/config')

const packageDefinition = protoLoader.loadSync(PROTO_PATH, loaderConfig);

const proto = grpc.loadPackageDefinition(packageDefinition);

client = new proto.UserService('microservice_user:50051', grpc.credentials.createInsecure());

module.exports = client
