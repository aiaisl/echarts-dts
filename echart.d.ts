declare namespace Echart {
    export interface Echarts {
        init: (el: HTMLElement) => Echarts;
        setOption: (options: EchartOption) => void;
    }    
    export interface TextStyle {
        color?: string,
        fontStyle?: string,
        fontWeight?: string,
        fontFamily?: string,
        fontSize?: number
    }
    export interface Animate {
        animation?: boolean;
        animationThreshold?: number;
        animationDuration?: number;
        animationEasing?: string;
        animationDelay?: number | Function;
        animationDurationUpdate?: number;
        animationEasingUpdate?: number;
        animationDelayUpdate?: number | Function;
    }
    export interface Shadow {
        shadowBlur?: number;
        shadowColor?: string;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
    }
    export interface Position {
        show?: boolean;
        left?: string | number;
        top?: string | number;
        right?: string | number;
        bottom?: string | number;
        zlevel?: number;
        z?: number;
    }
    export interface Title extends Shadow, Position {
        text?: string;
        link?: string;
        target?: string;
        textStyle?: TextStyle;
        textAlign?: string;
        textBaseline?: string;
        subtext?: string;
        sublink?: string;
        subtarget?: string;
        subtextStyle?: TextStyle;
        padding?: number;
        itemGap?: number;
        backgroundColor?: string;
        borderColor?: string;
        borderWidth?: number;
    }
    export interface Legend extends Shadow, Position {
        width?: string | number;
        height?: string | number;
        orient?: string;
        align?: string;
        padding?: number;
        itemGap?: number;
        itemWidth?: number;
        itemHeight?: number;
        formatter?: string | Function;
        selectedMode?: string | boolean;
        inactiveColor?: string;
        selected?: Object;
        textStyle?: TextStyle;
        tooltip?: Object;
        data?: Array<any>;
        backgroundColor?: string;
        borderColor?: string;
        borderWidth?: number;
    }
    export interface Grid extends Position,Shadow {
        containLabel?: boolean;
        backgroundColor?: string;
    }
    export interface Timeline extends Position {
        type?: string;
        axisType?: string;
        currentIndex?: number;
        autoPlay?: boolean;
        rewind?: boolean;
        loop?: boolean;
        platInterval?: number;
        realtime?: boolean;
        controlPosition?: string;
        padding?: number;
        orient?: string;
        inverse?: boolean;
        symbol?: string;
        symbolSize?: number;
        symbolRoutate?: number;
        symbolOffset?: Array<any>;
        lineStyle?: LineStyle;
    }
    interface LineStyle extends Shadow {
        show?: boolean;
        coloe?: string;
        width?: number;
        type?: string;
        opacity?: number
    } 
    export interface EchartOption extends Animate {
        title?: Title,
        legend?: Legend,
        grid?: Grid,
        backgroundColor?: string;
        coloe?: string;
        textStyle?: TextStyle;
        progressive?: number;
        progressThreshold?: number;
        blendMode?: string;
        hoverLayerThreshold?: number;
    }

    export interface EchartsInstance{
        group: string|number;
        setOption: (option: EchartOption, notMerge: boolean, notRefreshImmediately: boolean)=>EchartsInstance;
        getWidth: ()=>number;
        getHeight: ()=>number;
        getDom: ()=>HTMLCanvasElement|HTMLDivElement;
        getOption: ()=> Object;
        resize: ()=>void;
        dispatchAction: (payload: Object)=>void;
        on: (eventName: string, handler: Function, context?: Object)=>void;
        off: (eventName: string, handler?: Function)=>void
        showLoading: (type: string, opts?:Object)=>void;
        hideLoading: ()=> void;
        getDataURL: ()=>string;
        getConnectedDataURL: ()=> string;
        clear: ()=>void;
        isDisposed: ()=>boolean;
        dispose: ()=>void;
    }
}
declare var echarts: Echart.Echarts;