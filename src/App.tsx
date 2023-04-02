import { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'

import eesti from './assets/geojson/eesti.json'

interface Props {
    className?: string
}

const canvas = {
    width: 1200,
    height: 800,
}

const AppComponent = ({ className }: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const initMap = useCallback(() => {
        const ctx = canvasRef.current?.getContext('2d')

        if (!ctx) return

        const projection = d3
            .geoMercator()
            .center([25, 58.7])
            .translate([canvas.width / 2, canvas.height / 2])
            .scale(9000)

        const pathGenerator = d3.geoPath(projection, ctx)

        // initialize the path
        ctx.beginPath()

        // Got the positions of the path
        pathGenerator(eesti as d3.GeoPermissibleObjects)

        // Fill the paths
        ctx.fillStyle = '#999'
        ctx.fill()

        // Add stroke
        ctx.strokeStyle = '#69b3a2'
        ctx.stroke()
    }, [])

    useEffect(() => {
        initMap()
    }, [initMap])

    return (
        <div className={className}>
            <div id="map" />
            <canvas id="canvas" ref={canvasRef} width={canvas.width} height={canvas.height} />
        </div>
    )
}

const App = styled(AppComponent)({
    maxWidth: '1280px',
    margin: 'auto',
    textAlign: 'center',
})

export default App
