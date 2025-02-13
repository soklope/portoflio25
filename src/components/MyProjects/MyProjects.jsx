import './my-projects.scss'
import useNavigationStore from '../../store/navigationStore';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectSlide from '../ProjectSlide/ProjectSlide';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

export default function MyProjects() {
    const { showProjects } = useNavigationStore();

    return (
        showProjects && (
            <div className="page-container my-projects">
                <h2 className='util-title'>Projects</h2>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                    <SwiperSlide>
                        <ProjectSlide 
                            description={'With experience in HTML, CSS, JavaScript, and frameworks like React and Next.js, I love turning ideas into functional and visually appealing digital experiences.'}
                            logo={'visibuilt'}
                            websiteName={'visibuilt.com'}
                            linkUrl={'https://visibuilt.com/'}

                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        )
    )
}