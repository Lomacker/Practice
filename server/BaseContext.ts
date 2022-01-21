import { IContextContainer } from "./container";

export default class BaseContext {
    protected di: IContextContainer;
    private static stopInit = false;

    constructor(opts: IContextContainer) {
        this.di = opts;
        if (!BaseContext.stopInit) {
            opts.initModels();
            BaseContext.stopInit = true;
        }
    }
}