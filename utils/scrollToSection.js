import { animateScroll } from "react-scroll"

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
        const sectionTop = section.offsetTop;
        animateScroll.scrollTo(sectionTop, {
            duration: 300,
            smooth: "easeOutCubic",
        })
    }
}
export default scrollToSection;