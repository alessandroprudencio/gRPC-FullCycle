const PROTO_PATH = __dirname + '/../src/protos/user.proto';
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const database = require('./database/config');

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);

const proto = grpc.loadPackageDefinition(packageDefinition);

const implementations = require('./implementations/user')

function main() {

    const server = new grpc.Server();

    server.addService(proto.UserService.service, {...implementations});

    server.bindAsync('microservice_user:50051', grpc.ServerCredentials.createInsecure(), (error, port) => {
        if (error != null) {
            return console.error(error);
        }
        console.log(`microservice gRPC user listening on ${port}`);
        server.start();
    });
}

main();

(async () => {
    try {
        await database.sync();
    } catch (error) {
        console.log(error);
    }
})()

