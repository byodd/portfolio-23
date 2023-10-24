import ProjectsBanner from './projects-banner'
import ProjectsGallery from './projects-gallery'

export default function ProjectsShowcase(){
    return (
        <div className='z-10'>
            <ProjectsBanner/>
            <ProjectsGallery/>
        </div>
    )
}