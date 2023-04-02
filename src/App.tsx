import { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'

import eesti from './assets/geojson/vallad.json'
import { darkGrayishGreen, grayishGolden } from './lib/colors'

interface Props {
    className?: string
}

const map = {
    width: 1200,
    height: 800,
}

const AppComponent = ({ className }: Props) => {
    const svgRef = useRef<SVGSVGElement>(null)

    const initSvgMap = useCallback(() => {
        const projection = d3
            .geoMercator()
            .center([25, 58.7])
            .translate([map.width / 2, map.height / 2])
            .scale(9000)

        const path = d3.geoPath(projection)

        d3.select('#svg-map g')
            .selectAll('path')
            .data(eesti.features)
            .attr('class', (data) => data.properties.OKOOD) // add classNames
            .join('path')
            // @ts-expect-error TBI - Property 'geometries' is missing in type
            .attr('d', path)
    }, [])

    useEffect(() => {
        initSvgMap()
    }, [initSvgMap])

    return (
        <div className={className}>
            <svg id="svg-map" ref={svgRef} width={map.width} height={map.height}>
                <g />
            </svg>
        </div>
    )
}

const App = styled(AppComponent)({
    maxWidth: '1280px',
    margin: 'auto',
    textAlign: 'center',

    svg: {
        fill: darkGrayishGreen,
        stroke: grayishGolden,
    },
})

export default App
