import './my-projects.scss'
import useNavigationStore from '../../store/navigationStore';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectSlide from '../ProjectSlide/ProjectSlide';
import { Fade } from 'react-awesome-reveal';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

export default function MyProjects() {
    const { showProjects, fadeDuration } = useNavigationStore();

    return (
        showProjects && (
            <Fade duration={fadeDuration}>
                <div className="my-projects">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        scrollbar={{ draggable: true }}
                        >
                        <SwiperSlide>
                            <ProjectSlide 
                                descriptionOne={'Visibuilt is a biotech startup based in Copenhagen, Denmark, focused on developing a sustainable alternative to bitumen for asphalt production.'}
                                descriptionTwo={'To support their mission, I designed and built a fully custom React website, seamlessly integrated with Firebase Hosting and Firestore. This setup ensures a dynamic and scalable platform, with a dedicated news article page that allows for easy content management and real-time updates.'}
                                projectName={'visibuilt'}
                                websiteName={'visibuilt.com'}
                                linkUrl={'https://visibuilt.com/'}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProjectSlide 
                                descriptionOne={'Morgenfest is a key digital hub for events organized by Morningtrain, Morningbound, and Mornings—three of Denmark’s most innovative digital agencies.'}
                                descriptionTwo={'As part of my internship at Morningtrain ApS, I developed Morgenfest as a custom WordPress theme, ensuring a highly maintainable and user-friendly experience. The project was built based on a Figma UI design from a dedicated designer and developed in close collaboration with backend intern Kasper Ptak, ensuring a seamless integration of frontend and backend functionalities.'}
                                projectName={'morgenfest'}
                                websiteName={'morgenfest.dk'}
                                linkUrl={'https://morgenfest.dk/'}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Fade>
        )
    )
}