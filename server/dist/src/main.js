"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const port = 3333;
    await app.listen(port, () => {
        common_1.Logger.log('Listening at http://localhost:' + port);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map