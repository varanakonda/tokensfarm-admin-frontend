import {
    ArrayField,
    BooleanField,
    ChipField,
    Datagrid,
    DateField,
    FilterList,
    FilterListItem,
    ImageField,
    List,
    NumberField,
    ReferenceField, SelectColumnsButton,
    SingleFieldList,
    TextField,
    TopToolbar,
    UrlField
} from 'react-admin';
import {Card, CardContent} from "@mui/material";
import {StakingTokenIconsField} from "../Fields/StakingTokenIconsField";
import {RewardTokenIconsField} from "../Fields/RewardTokenIconsField";
import {CoinMarketCapSearchField} from "../Fields/CoinMarketCapSearchField";
import {ColorTextField} from "../Fields/ColorTextField";
import {SourceTokenAddressField} from "../Fields/SourceTokenAddressField";
import {FarmProxyAddressField} from "../Fields/FarmProxyAddressField";


const ListActions = () => (
    <TopToolbar>
        <SelectColumnsButton />
    </TopToolbar>
);

const FarmFilters = () => {
    return (
        <Card sx={{order: -1, width: 400}}>
            <CardContent>

                <FilterList label={'Active?'} icon={<></>}>
                    <FilterListItem label={'Active'} value={{active: true}} />
                    <FilterListItem label={'Ended'} value={{active: false}} />
                </FilterList>

                <FilterList label={'Farm Type'} icon={<></>}>
                    <FilterListItem label={'LP'} value={{farm_type: 'LP'}} />
                    <FilterListItem label={'SDK'} value={{farm_type: 'SDK'}} />
                    <FilterListItem label={'STAKING'} value={{farm_type: 'STAKING'}} />
                    <FilterListItem label={'UNIV3'} value={{farm_type: 'UNIV3'}} />
                    <FilterListItem label={'VESTING'} value={{farm_type: 'VESTING'}} />
                </FilterList>

                <FilterList label={'Sort'} icon={<></>}>
                    <FilterListItem label={'APY'} value={{sort: 'apy'}} />
                    <FilterListItem label={'Newest'} value={{sort: 'newest'}} />
                    <FilterListItem label={'Days Left'} value={{sort: 'days_left'}} />
                </FilterList>

            </CardContent>
        </Card>
    )
}

export const FarmList = () => (
    <List aside={<FarmFilters/>} actions={<ListActions/>}>
        <Datagrid>
            <TextField source="id" />
            <BooleanField source="active" />
            <TextField source="projectName" />
            <TextField source="symbol" />
            <TextField source="rewardTokenSymbol" />
            <TextField source="stakingTokenSymbol" />
            <TextField source="stakingTokenLabelShort" />

            <NumberField source="apy" />
            <NumberField source="farmScore" />

            <NumberField source="farmLiquidity" />
            <NumberField source="farmLiquidityMax" />
            <DateField source="startTime" />
            <DateField source="endTime" />

            <StakingTokenIconsField />
            <RewardTokenIconsField />

            <ImageField source="banner" />
            <ImageField source="logo" />
            <ImageField source="shareImage" />
            <ImageField source="favicon" />

            <TextField source="vestingType" />
            <NumberField source="vestingPortion" />
            <NumberField source="vestingDistributionPeriod" />

            <ColorTextField label='Primary Color' source="primaryColor" />
            <ColorTextField label='Highlight Color' source="highlightColor" />

            <BooleanField source="new" />
            <TextField source="type" />

            <ArrayField source="singleAssets">
                <SingleFieldList>
                    <ChipField source="symbol" />
                </SingleFieldList>
            </ArrayField>

            <TextField source="univ3FarmKey" />

            <FarmProxyAddressField />
            <SourceTokenAddressField/>

            <BooleanField source="darkMode" />
            <ReferenceField source="perpetualEpochCurrentId" reference="perpetualEpochCurrents" />

            <TextField source="nonce" />

            <TextField source="network.chainName" />
            <TextField source="sourceTokenNetworkId" />
            <TextField source="sourceTokenNetworks" />

            {/*<ReferenceField source="sourceTokenNetworkId" reference="sourceTokenNetworks" />*/}

            <TextField source="projectDescription" />

            <BooleanField source="perpetual" />

            <TextField source="univ3FarmKeyHash" width={50} />

            <UrlField target={'_blank'} source="dexUrl" />
            <UrlField target={'_blank'} source="websiteLink" />
            <UrlField target={'_blank'} source="twitterLink" />
            <UrlField target={'_blank'} source="telegramLink" />
            <UrlField target={'_blank'} source="discordLink" />
            <CoinMarketCapSearchField />

        </Datagrid>
    </List>
);