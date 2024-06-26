// Technologies
import HTML5 from '@/assets/Images/Technologies/HTML5.png'
import CSS from '@/assets/Images/Technologies/CSS.png'
import JavaScript from '@/assets/Images/Technologies/JavaScript.png'
import TypeScript from '@/assets/Images/Technologies/TypeScript.png'
import Bootstrap from '@/assets/Images/Technologies/Bootstrap.png'
import Sass from '@/assets/Images/Technologies/Sass.png'
import Vue from '@/assets/Images/Technologies/Vue.png'
import Laravel from '@/assets/Images/Technologies/Laravel.png'
import Git from '@/assets/Images/Technologies/Git.png'
// Experience
import ITAM from '@/assets/Images/Experience/ITAM.png'
import HRD from '@/assets/Images/Experience/HRD.png'
// Projects
import OG from '@/assets/Images/Projects/OG.png'
import IMS from '@/assets/Images/Projects/IMS.png'
import KSK from '@/assets/Images/Projects/KSK.png'
import CWS from '@/assets/Images/Projects/CWS.png'
import VIMS from '@/assets/Images/Projects/VIMS.png'

const arrImages = [
    {'name': 'HTML5', 'url': HTML5},
    {'name': 'CSS', 'url': CSS},
    {'name': 'JavaScript', 'url': JavaScript},
    {'name': 'TypeScript', 'url': TypeScript},
    {'name': 'Bootstrap', 'url': Bootstrap},
    {'name': 'Sass', 'url': Sass},
    {'name': 'Vue', 'url': Vue},
    {'name': 'Laravel', 'url': Laravel},
    {'name': 'Git', 'url': Git},
    {'name': 'ITAM', 'url': ITAM},
    {'name': 'HRD', 'url': HRD},
    {'name': 'OG', 'url': OG},
    {'name': 'IMS', 'url': IMS},
    {'name': 'KSK', 'url': KSK},
    {'name': 'CWS', 'url': CWS},
    {'name': 'VIMS', 'url': VIMS},
]

export function getImages(name) {
    console.log(arrImages.find((arr) => arr.name === name).url, 44, 'Projects')
    return arrImages.find((arr) => arr.name === name).url
}