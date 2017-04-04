export interface IObject {
    guid: string;
    objectType: string;
    componentType: string;
}

export interface IChannel extends IObject {
    id: string;
}

export interface IOutBoundAdapter extends IObject {

}

export interface IOutboundChannelAdapter extends IObject { }

export interface IInboundChannelAdapter extends IObject { }

export interface ISupportObject extends IObject {
    position: IPoint;
    label: string;
}

export interface ITransformer extends IObject {
    inputChannel: string;
    outputChannel: string;
    id: string;
}

export interface ICONTEXTPropertyPlaceHolder extends ISupportObject {
    ignoreResourceNotFound: boolean;
    ignoreUnresolvable: boolean;
    localOverride: boolean;
}

export interface ISIMessageHistory extends ISupportObject { }

export interface ICachingConnectionFactory extends ISupportObject {
    class: string;
    targetConnectionFactoryRef: string;
    cacheConsumers: boolean;
    cacheProducers: boolean
    reconnectOnException: boolean
    reconnectOnFailover: boolean;
}

export interface IH extends IObject {
    class: string;
    contextId: string;
    omitPayload: boolean;
    omitStackTrace: boolean;
    restoreHeaders: string;
}

export interface IErrorToXmlTransformerInvoker extends ITransformer {
    method: string;
    H: IH;
}

export interface ISITransformer extends ITransformer {
    expression: string;
}

export interface IJMSOutBoundChannelAdapter extends IOutBoundAdapter {
    channel: string,
    connectionFactory: string;
    deliveryPersistent: boolean,
    destinationName: string,
    explicitQosEnabled: boolean,
    ExtractPayload: boolean
    id: string;
    pubSubDomain: boolean;
}

export interface IChannelObject {
    objectType: string;
    guid: string;
    channel: string;
}

export interface ISIChannel extends IChannel {
    SIInterceptors?: IChannelObject[]
}

export interface IJMSmessagedrivenchanneladapter extends IInboundChannelAdapter {
    channel: string;
    connectionFactory: string;
    errorChannel: string;
    acknowledge: string;
    destinationName: string
    extractPayload: boolean
    id: string;
    pubSubDomain: boolean,
    recoveryInterval: string,
    subscriptionDurable: string;
}

export interface IFILEOutBoundChannelAdapter extends IOutboundChannelAdapter {
    channel: string;
    autoCreateDirectory: boolean;
    deleteSourceFiles: boolean;
    directory: string;
    fileNameGeneratorExpression: string;
    id: string;
    mode: string;
}

export interface IZimbraAuthenticationSaajSoapInterceptor extends ISupportObject {
    class: string;
    id: string;
    constructorArg0: string;
    constructorArg1: string;
    constructorArg2: string;
}

export interface IPoint {
    x: number;
    y: number;
}