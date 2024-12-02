import BannerPage from "@/components/banner/page";
import SectionTitle from "@/components/sectionTitle/page";
import TourList from "@/components/tourList/page";
import { getPost } from "../../_actions/postActons";

export default async function Home() {
  const { data, errMsg } = await getPost();
  if (errMsg) return <h1>{errMsg}</h1>;

  return (
    <main>
      <div className="mb-10">
        <BannerPage></BannerPage>
        <SectionTitle></SectionTitle>
        <TourList></TourList>
        {data.map((item) => (
          <h1 key={item._id}>{item.msg}</h1>
        ))}
      </div>
    </main>
  );
}
