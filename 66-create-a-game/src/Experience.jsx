import Lights from './Lights.jsx'
import {Level} from './Level.js'
import {Physics} from '@react-three/rapier'
import Player from './Player.js'

export default function Experience()
{
    return <>
        <Physics debug={false}>
            <Lights />
            <Level/>
            <Player />
        </Physics>

    </>
}