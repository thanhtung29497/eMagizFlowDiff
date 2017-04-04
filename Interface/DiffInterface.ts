export interface IDiff {
    isDiff: IBasicDiff<boolean>;
}

export interface IObjectDiff extends IDiff {
    guid: IBasicDiff<string>;
    objectType: IBasicDiff<string>;
    componentType: IBasicDiff<string>;
}

export interface IBasicDiff<T> extends IDiff {
    member1: T;
    member2: T;
    typeName: IBasicDiff<string>;
}

export interface IChannelDiff extends IObjectDiff {
    id: IBasicDiff<string>;
}

export interface IOutBoundAdapterDiff extends IObjectDiff { }

export interface IOutboundChannelAdapterDiff extends IObjectDiff { }

export interface IInboundChannelAdapterDiff extends IObjectDiff { }

export interface ISupportObjectDiff extends IObjectDiff {
    position: IPointDiff;
    label: IBasicDiff<string>;
}

export interface ITransformerDiff extends IObjectDiff {
    inputChannel: IBasicDiff<string>;
    outputChannel: IBasicDiff<string>;
    id: IBasicDiff<string>;
}

export interface ICONTEXTPropertyPlaceHolderDiff extends ISupportObjectDiff {
    ignoreResourceNotFound: IBasicDiff<boolean>;
    ignoreUnresolvable: IBasicDiff<boolean>;
    localOverride: IBasicDiff<boolean>;
}

export interface ISIMessageHistoryDiff extends ISupportObjectDiff { }

export interface ICachingConnectionFactoryDiff extends ISupportObjectDiff {
    class: IBasicDiff<string>;
    targetConnectionFactoryRef: IBasicDiff<string>;
    cacheConsumers: IBasicDiff<boolean>;
    cacheProducers: IBasicDiff<boolean>
    reconnectOnException: IBasicDiff<boolean>
    reconnectOnFailover: IBasicDiff<boolean>;
}

export interface IHDiff extends IObjectDiff {
    class: IBasicDiff<string>;
    contextId: IBasicDiff<string>;
    omitPayload: IBasicDiff<boolean>;
    omitStackTrace: IBasicDiff<boolean>;
    restoreHeaders: IBasicDiff<string>;
}

export interface IErrorToXmlTransformerInvokerDiff extends ITransformerDiff {
    method: IBasicDiff<string>;
    H: IHDiff;
}

export interface ISITransformerDiff extends ITransformerDiff {
    expression: IBasicDiff<string>;
}

export interface IJMSOutBoundChannelAdapterDiff extends IOutBoundAdapterDiff {
    channel: IBasicDiff<string>,
    connectionFactory: IBasicDiff<string>;
    deliveryPersistent: IBasicDiff<boolean>,
    destinationName: IBasicDiff<string>,
    explicitQosEnabled: IBasicDiff<boolean>,
    extractPayload: IBasicDiff<boolean>
    id: IBasicDiff<string>;
    pubSubDomain: IBasicDiff<boolean>;
}

export interface IChannelObjectDiff extends IDiff {
    objectType: IBasicDiff<string>;
    guid: IBasicDiff<string>;
    channel: IBasicDiff<string>;
}

export interface ISIChannelDiff extends IChannelDiff {
    SIInterceptors?: IChannelObjectDiff[]
}

export interface IJMSmessagedrivenchanneladapterDiff extends IInboundChannelAdapterDiff {
    channel: IBasicDiff<string>;
    connectionFactory: IBasicDiff<string>;
    errorChannel: IBasicDiff<string>;
    acknowledge: IBasicDiff<string>;
    destinationName: IBasicDiff<string>
    extractPayload: IBasicDiff<boolean>
    id: IBasicDiff<string>;
    pubSubDomain: IBasicDiff<boolean>,
    recoveryInterval: IBasicDiff<string>,
    subscriptionDurable: IBasicDiff<string>;
}

export interface IFILEOutBoundChannelAdapterDiff extends IOutboundChannelAdapterDiff {
    channel: IBasicDiff<string>;
    autoCreateDirectory: IBasicDiff<boolean>;
    deleteSourceFiles: IBasicDiff<boolean>;
    directory: IBasicDiff<string>;
    fileNameGeneratorExpression: IBasicDiff<string>;
    id: IBasicDiff<string>;
    mode: IBasicDiff<string>;
}

export interface IZimbraAuthenticationSaajSoapInterceptorDiff extends ISupportObjectDiff {
    class: IBasicDiff<string>;
    id: IBasicDiff<string>;
    constructorArg0: IBasicDiff<string>;
    constructorArg1: IBasicDiff<string>;
    constructorArg2: IBasicDiff<string>;
}

export interface IPointDiff extends IDiff {
    x: IBasicDiff<number>;
    y: IBasicDiff<number>;
}