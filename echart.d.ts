declare namespace Echart {
    export interface GraphicRadialGradient {
        new (m: number): string
    }
    export interface GraphicLinearGradient {
        new (m: number): string
    }
    export interface GraphicPattern {
        new (m: number): string
    }
    export interface Graphic {
        RadialGradient: {
            new (
                x: number,
                y: number,
                radius: number,
                colors: Array<{
                offset: number;
                color: string;
            }>, fixed?: boolean): string
        };
        LinearGradient: {
            new (x0: number, y0: number, z2: number, y2: number, colors: Array<{
                offset: number;
                color: string;
            }>, fixed?: boolean): string
        };
        Pattern: {
            imageDom: HTMLImageElement | HTMLCanvasElement;
            //repeat-x, repeat-y, no-repeat
            repeat: string;
        };
    }
    export interface c{
        s: "sd"
    }
    export interface Echarts {
        init: (el: HTMLElement) => Echarts;
        connect: (group: string | Array<string>) => void;
        disConnect: (dispose: string) => void;
        dispose: (target: Echarts | HTMLDivElement | HTMLCanvasElement) => void;
        getInstanceByDom: (target: HTMLDivElement | HTMLCanvasElement) => Echarts;
        registerMap: (mapName: string, geoJson: Object, specialAreas?: Object) => void;
        getMap: (mapName: string) => Object;
        registerTheme: (themeName: string, theme: Object) => void;
        setOption: (options: EchartOption) => void;
        graphic: Graphic
    }
    export interface TextStyle {
        color?: string,
        //normal, italic, oblique
        fontStyle?: string,
        //normal, bold, bolder, lighter
        fontWeight?: string|number,
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
        //self, blank
        target?: string;
        textStyle?: TextStyle;

        //left, center, right
        textAlign?: string;

        //top, middle, bottom
        textBaseline?: string;
        subtext?: string;
        sublink?: string;
        subtarget?: string;
        subtextStyle?: TextStyle;
        padding?: number| Array<number>;
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
    export interface Grid extends Position, Shadow {
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
        color?: string;
        width?: number;

        //
        type?: string;
        opacity?: number
    }
    export interface SerieType {
        name: string,
        //line, bar, pie, scatter, effectScatter, radar, treemap, boxplot, candlestice, heatmap, map, parallel, lines, graph, sankey, funnel, gauge
        type: string,
        data: Array<number>
    }
    export interface SplitLine {
        show?: boolean;
        interval?: number | Function;
        lineStyle?: LinkStyle
    }
    export interface XAxis extends Axis {
        
    }
    interface Axis {
        gridIndex?: number;
        position?: string;
        offset?: number;
        //value, category, time, log
        type?: string;
        name?: string;
        //start, middle, end
        nameLocation?: string;
        nameTextStyle?: TextStyle;
        nameGap?: number;
        nameRotate?: number;
        inverse?: boolean;
        boundaryGap?: boolean | Array<string>;
        min?: number | string;
        max?: number | string;
        scale?: boolean;
        splitNumber?: number;
        minInterval?: number;
        interval?: number;
        silent?: boolean;
        triggerEvent?: boolean;
        axisLine?: Object;
        splitLine?: SplitLine;
        data?: Array<string|{
            value: string;
            textStyle: TextStyle
        }>;
    }
    export interface YAxis extends Axis {

    }
    interface Color{

    }
    export interface Toolbox{
        show: boolean;
        orient: string;
        itemSize: number;
        itemGap: number;
        showTitle: boolean;
        feature: {
            saveAsImage: {
                type: string;
                name: string;
                backgroundColor: Color;
                excludeComponents: Array<string>;
                show: boolean;
                title: string;
                icon: string;
                iconStyle: Object;
                pixelRatio: number;
            }
        }
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
        series?: Array<SerieType>,
        xAxis?: XAxis,
        toolbox?: Toolbox;
        tooltip?: Tooltip;
        yAxis?: YAxis;
    }

    export interface Tooltip {
        show: boolean;
        showContent: boolean;
        //item, axis
        trigger: string;
        //mousemove, click
        triggerOn: string;
        alwaysShowContent: boolean;
        showDelay: number;
        hideDelay: number;
        enterable: boolean;
        position: string|Array<string>|Function;
        axisPointer: Object;
        extraCssText: string;
        textStyle: TextStyle;
        padding: number;
        borderWidth: number;
        borderColor: Color;
        backgroundColor: Color;
        containLabel: boolean;
    }

    export interface EchartsInstance {
        group: string | number;
        setOption: (option: EchartOption, notMerge: boolean, notRefreshImmediately: boolean) => EchartsInstance;
        getWidth: () => number;
        getHeight: () => number;
        getDom: () => HTMLCanvasElement | HTMLDivElement;
        getOption: () => Object;
        resize: () => void;
        dispatchAction: (payload: Object) => void;
        on: (eventName: string, handler: Function, context?: Object) => void;
        off: (eventName: string, handler?: Function) => void
        showLoading: (type: string, opts?: Object) => void;
        hideLoading: () => void;
        getDataURL: () => string;
        getConnectedDataURL: () => string;
        clear: () => void;
        isDisposed: () => boolean;
        dispose: () => void;
    }
}
declare var echarts: Echart.Echarts;