import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ param }) {
  const router = useRouter();
  const [title, id] = param || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { param } }) {
  return {
    props: {
      param,
    },
  };
}
