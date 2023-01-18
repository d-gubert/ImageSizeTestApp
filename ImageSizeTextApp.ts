import {
    IAppAccessors,
    IConfigurationExtend,
    IConfigurationModify,
    IEnvironmentRead,
    ILogger,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { lookup } from './vendor/image-size/lib/index';

export class ImageSizeTextApp extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    protected async extendConfiguration(configuration: IConfigurationExtend, environmentRead: IEnvironmentRead): Promise<void> {
        configuration.slashCommands.provideSlashCommand({
            i18nDescription: 'laksjdasld',
            i18nParamsExample: 'aksjdhakjskkd',
            command: 'image',
            providesPreview: false,
            async executor(context, read, modify, http, persis) {
                const image = await http.get('https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif', { encoding: null });
                console.log(lookup(image.content as unknown as Buffer));
            },
        })
    }

}
