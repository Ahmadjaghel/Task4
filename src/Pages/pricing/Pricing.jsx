import Card from "../../components/pricing/PricingCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import styles from "./Pricing.module.css";

export const Pricing = () => {
  return (
    <div className="d-flex flex-column my-4 align-items-center">
      <SectionTitle
        title="Pricing"
        text=" lorem ipsum whatever whatever whatever whatever whatever whatever whatever"
      />
      <div
        className={`${styles.cards} d-flex flex-row`}
        style={{ width: "90%" }}
      >
        <Card title={"Free"} price={"0"} isFree={true} />
        <Card title={"Business"} price={"19"} isBusiness={true} />
        <Card title={"Developer"} price={"29"} />
        <Card title={"Ultimate"} price={"48"} isAdvance={true} />
      </div>
    </div>
  );
};
