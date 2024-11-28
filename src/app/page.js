
import BannerPage from "@/components/banner/page";
import SectionTitle from "@/components/sectionTitle/page";
import TourList from "@/components/tourList/page";

export default function Home() {
  return (
    <div className="mb-10">
      <BannerPage></BannerPage>
      <SectionTitle></SectionTitle>
      <TourList></TourList>
    </div>
  );
}
