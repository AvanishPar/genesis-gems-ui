import { ReactComponent as DeFiPng } from "../../assets/details/defiPng.svg";
import DetailsSlider from "../GempoolDetails/DetailsSlider";
import GempoolDetailsInfoComp from "../GempoolDetails/GempoolDeatilsInfoComp";
import GempoolDetailsTableWithThreeColumn from "../GempoolDetails/GempoolDetailsTableWithThreeColumn";
import GempoolDetailsTableWithTwoColumn from "../GempoolDetails/GempoolDetailsTableWithTwoColumn";

import {
  detailsFakeDataLootbox,
  lootboxFirstTableData,
  lootboxSecondTableData,
} from "./lootboxDetailsFakeData";

const LootboxDetails = () => {
  return (
    <div className="gempoolDetails">
      <div className="gempoolDetails__content">
        <div className="gempoolDetails__content__upperPart">
          <div className="gempoolDetails__content__upperPart__leftSection">
            <div className="gempoolDetails__content__upperPart__leftSection--imgDiv">
            <DeFiPng />
        
            </div>
            <DetailsSlider />
          </div>
          <GempoolDetailsInfoComp
            nft="NFT Loot"
            title="Land o Loot"
            secondBtn="Open"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ligula risus sed lacus nec, pellentesque at maecenas. Nisi, odio risus nunc cras. Sollicitudin nulla orci vitae ut turpis vitae neque."
            details={{
              first: "Open Price",
              second: "Lifetime Opens",
              third: "Maximum Loot Awarded",
              fourth: "Maximum Loot Awarded",
              last: "Loot minted",
            }}
            detailsData={detailsFakeDataLootbox}
          />
        </div>
        <GempoolDetailsTableWithTwoColumn
          data={lootboxFirstTableData}
          title="Recent Opens"
        />
        <GempoolDetailsTableWithThreeColumn
          data={lootboxSecondTableData}
          title="Minted Loot"
        />
      </div>
    </div>
  );
};

export default LootboxDetails;
