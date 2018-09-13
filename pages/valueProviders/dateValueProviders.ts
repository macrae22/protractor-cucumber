import * as moment from 'moment';

export namespace DateValueProviders {
    const format = "DDMMYYYY";
    export const tomorrow = () => moment().add(1, "days").format(format);
}
