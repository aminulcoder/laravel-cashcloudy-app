import AppLayout from "@/Layouts/AppLayout";
import Mission from "../Components/Mission/Mission.jsx";
import Feature from "../Components/Feature/Feature.jsx";
import Vission from "../Components/Vission/Vission.jsx";
import Faq from "../Components/Faqs/Faq.jsx";
export default function Homepage() {
    return (
        <AppLayout>
            <Mission />
            <Feature />
            <Vission />
            <Faq />
        </AppLayout>
    );
}
