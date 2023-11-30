export interface IPages {
  current_page: number
  has_next: boolean
  has_previous: boolean
  next_page: number
  page_size: number
  previous_page: null
  total_pages: number
  total_records: number
}

export interface ITokensFarmResponse {
  farms: Farm[];
  pages: IPages | null;
}

export interface Farm {
  vestingDistributionPeriod: number | null;
  vestingNonce: number | null;
  projectName: null | string;
  stakingTokenLabel: null | string;
  flatFeeAmountDeposit: string;
  perpetualEpochsPast: string[];
  type: EnumFarmType;
  vestingFinishTimestamp: number | null;
  daysLabel: string;
  primaryColor: string;
  singleAssets: Asset[];
  vestingStartTimestamp: number | null;
  stakingTokenSymbol: null | string;
  discordLink: null | string;
  lp2TokenSymbol: Lp2TokenSymbol | null;
  darkMode: boolean;
  vestingDefault: number | null;
  rewardTokenAddress: string;
  apy: number;
  allParticipantsAdded: boolean;
  dexAddLiquidityUrl: string;
  twitterLink: null | string;
  vestingAfterSelectionPeriod: number | null;
  highlightColor: string;
  farmScore: number;
  vestingPortion: number | null;
  vestingType: VestingType | null;
  contracts: IContracts;
  isFlatFeeAllowed: boolean;
  vestingStartSelectionTimestamp: number | null;
  stakeFeePercent: number | null;
  deploymentChecksumStatus: number;
  dexSwapUrl: string;
  activationTransactionStatus: number;
  telegramLink: null | string;
  farmProxyAddress: string;
  websiteLink: null | string;
  dexLpPairInfoUrl: string;
  perpetualEpochCurrentId: number | null;
  perpetualEpochs: PerpetualEpoch[] | null;
  active: boolean;
  projectDescription: null | string;
  abi: IABI;
  deploymentTransactionStatus: number;
  symbol: string;
  perpetual: boolean;
  univ3FarmKey: Array<number | string>;
  domain: string;
  isReadyForFunding: boolean;
  tokenSupplyLabel: string;
  startTime: Date | null;
  stakingTokenIcons: string[];
  network: Network;
  shareImage: null | string;
  farmAssets: FarmAsset[];
  enabled: boolean;
  id: number;
  sourceTokenNetworkId: number | null;
  favicon: null | string;
  updatedAt: null;
  flatFeeAmountWithdraw: string;
  nonce: string;
  new: boolean;
  stage: Stage;
  vestingStakingFarmAddress: VestingStakingFarmAddress;
  tokenPriceTimestamp: Date | null;
  stakingTokenLabelShort: null | string;
  farmLiquidity: number;
  endTime: Date;
  stakingTokenAddress: string;
  rewardTokenIcons: string[];
  univ3FarmKeyHash: null | string;
  banner: null | string;
  rewardFeePercent: number | null;
  lp1TokenSymbol: null | string;
  rewardTokenSymbol: null | string;
  createdAt: Date;
  sourceTokenAddress: string;
  dexUrl: string;
  farmLiquidityMax: number;
  tokenPrice: number;
  logo: null | string;
  isFunded: boolean;
  isSelectionActive?: boolean;
}

export interface IABI {
  'bsc-mainnet'?: Mainnet;
  'eth-mainnet'?: EthMainnet;
  'poly-mainnet'?: PolyMainnet;
  'arb-mainnet'?: ArbMainnet;
  'ftm-mainnet'?: Mainnet;
  'avax-mainnet'?: Mainnet;
}

export interface ArbMainnet {
  TokensFarm?: MerkleIterativeVesting[];
  TokensFarmSDK?: MerkleIterativeVesting[];
  MerkleIterativeVesting?: MerkleIterativeVesting[];
  PerpetualTokensFarmSDK?: MerkleIterativeVesting[];
  MerkleLinearVesting?: MerkleIterativeVesting[];
}

export interface MerkleIterativeVesting {
  anonymous?: boolean;
  inputs?: Input[];
  name?: string;
  type: MerkleIterativeVestingType;
  outputs?: Input[];
  stateMutability?: StateMutability;
}

export interface Input {
  indexed?: boolean;
  internalType: InternalTypeEnum;
  name: string;
  type: InternalTypeEnum;
  components?: Input[];
}

export enum InternalTypeEnum {
  Address = 'address',
  AddressPayable = 'address payable',
  Bool = 'bool',
  Bytes = 'bytes',
  Bytes32 = 'bytes32',
  Bytes4 = 'bytes4',
  ContractIERC20 = 'contract IERC20',
  ContractIERC20Minimal = 'contract IERC20Minimal',
  ContractIERC721 = 'contract IERC721',
  ContractIMaintainersRegistry = 'contract IMaintainersRegistry',
  ContractINonfungiblePositionManager = 'contract INonfungiblePositionManager',
  ContractITokensFarmUniV3 = 'contract ITokensFarmUniV3',
  ContractIUniswapV3Factory = 'contract IUniswapV3Factory',
  ContractIUniswapV3Pool = 'contract IUniswapV3Pool',
  ContractIUniswapV3Staker = 'contract IUniswapV3Staker',
  EnumPerpetualTokensFarmEarlyWithdrawPenalty = 'enum PerpetualTokensFarm.EarlyWithdrawPenalty',
  EnumPerpetualTokensFarmSDKEarlyWithdrawPenalty = 'enum PerpetualTokensFarmSDK.EarlyWithdrawPenalty',
  EnumTokensFarmEarlyWithdrawPenalty = 'enum TokensFarm.EarlyWithdrawPenalty',
  EnumTokensFarmFactoryFarmTypes = 'enum TokensFarmFactory.FarmTypes',
  EnumTokensFarmSDKEarlyWithdrawPenalty = 'enum TokensFarmSDK.EarlyWithdrawPenalty',
  EnumTokensFarmSDKFactoryFarmTypes = 'enum TokensFarmSDKFactory.FarmTypes',
  EnumTokensFarmUniV3EarlyWithdrawPenalty = 'enum TokensFarmUniV3.EarlyWithdrawPenalty',
  EnumVestingFarmFactoryFarmTypes = 'enum VestingFarmFactory.FarmTypes',
  Int24 = 'int24',
  PurpleBytes32 = 'bytes32[]',
  String = 'string',
  StructIUniswapV3StakerIncentiveKey = 'struct IUniswapV3Staker.IncentiveKey',
  StructIterativeVestingFarmReward = 'struct IterativeVestingFarm.Reward[]',
  StructLinearVestingFarmReward = 'struct LinearVestingFarm.Reward[]',
  StructPerpetualTokensFarmDepositRequest = 'struct PerpetualTokensFarm.DepositRequest[]',
  StructPerpetualTokensFarmSDKDepositRequest = 'struct PerpetualTokensFarmSDK.DepositRequest[]',
  StructPerpetualTokensFarmUnStakeRequest = 'struct PerpetualTokensFarm.UnStakeRequest[]',
  StructReferralDashboardReferral = 'struct ReferralDashboard.Referral[]',
  StructReferralDiligenceReferral = 'struct ReferralDiligence.Referral[]',
  StructTokensFarmDepositRequest = 'struct TokensFarm.DepositRequest[]',
  StructTokensFarmSDKDepositRequest = 'struct TokensFarmSDK.DepositRequest[]',
  StructTokensFarmStakeInfo = 'struct TokensFarm.StakeInfo[]',
  StructTokensFarmUnStakeRequest = 'struct TokensFarm.UnStakeRequest[]',
  StructTokensFarmWithdrawRequest = 'struct TokensFarm.WithdrawRequest[]',
  StructUniswapUtilsRewardInfo = 'struct UniswapUtils.RewardInfo[]',
  StructUniswapUtilsTokenPoolInfo = 'struct UniswapUtils.TokenPoolInfo[]',
  Tuple = 'tuple[]',
  TypeAddress = 'address[]',
  TypeBool = 'bool[]',
  TypeBytes = 'bytes[]',
  TypeBytes32 = 'bytes32[][]',
  TypeString = 'string[]',
  TypeStructIUniswapV3StakerIncentiveKey = 'struct IUniswapV3Staker.IncentiveKey[]',
  TypeTuple = 'tuple',
  TypeUint256 = 'uint256[]',
  Uint128 = 'uint128',
  Uint160 = 'uint160',
  Uint24 = 'uint24',
  Uint256 = 'uint256',
  Uint48 = 'uint48',
  Uint8 = 'uint8',
  Uint96 = 'uint96',
}

export enum StateMutability {
  Nonpayable = 'nonpayable',
  Payable = 'payable',
  Pure = 'pure',
  View = 'view',
}

export enum MerkleIterativeVestingType {
  Constructor = 'constructor',
  Event = 'event',
  Function = 'function',
  Receive = 'receive',
}

export interface Mainnet {
  IterativeVestingFarm?: MerkleIterativeVesting[];
  MerkleLinearVesting?: MerkleIterativeVesting[];
  MerkleIterativeVesting?: MerkleIterativeVesting[];
  TokensFarm?: MerkleIterativeVesting[];
}

export interface EthMainnet {
  TokensFarm?: MerkleIterativeVesting[];
  MerkleLinearVesting?: MerkleIterativeVesting[];
  IterativeVestingFarm?: MerkleIterativeVesting[];
  MerkleIterativeVesting?: MerkleIterativeVesting[];
  LinearVestingFarm?: MerkleIterativeVesting[];
  PerpetualTokensFarmSDK?: MerkleIterativeVesting[];
}

export interface PolyMainnet {
  TokensFarm?: MerkleIterativeVesting[];
  IterativeVestingFarm?: MerkleIterativeVesting[];
  MerkleLinearVesting?: MerkleIterativeVesting[];
  MerkleIterativeVesting?: MerkleIterativeVesting[];
  PerpetualTokensFarmSDK?: MerkleIterativeVesting[];
  TokensFarmCongress?: MerkleIterativeVesting[];
  TokensFarmCongressMembersRegistry?: MerkleIterativeVesting[];
  MaintainersRegistry?: MerkleIterativeVesting[];
  TokensFarmFactory?: MerkleIterativeVesting[];
  PerpetualTokensFarm?: MerkleIterativeVesting[];
  VestingFarmFactory?: MerkleIterativeVesting[];
  TokensFarmSDK?: MerkleIterativeVesting[];
  TokensFarmSDKFactory?: MerkleIterativeVesting[];
  UniswapV3Staker?: MerkleIterativeVesting[];
  TokensFarmUniV3?: MerkleIterativeVesting[];
  UniswapUtils?: UniswapUtil[];
  ReferralDashboard?: MerkleIterativeVesting[];
  ReferralDiligence?: MerkleIterativeVesting[];
}

export interface UniswapUtil {
  inputs: Input[];
  name: string;
  outputs: Input[];
  stateMutability: StateMutability;
  type: MerkleIterativeVestingType;
}

export interface IContracts {
  TokensFarm?: string;
  StakingToken?: string;
  RewardToken?: string;
  'LP-SINGLE-TOKEN-1'?: string;
  'LP-SINGLE-TOKEN-2'?: string;
  IterativeVestingFarm?: string;
  MerkleLinearVesting?: string;
  MerkleIterativeVesting?: string;
  LinearVestingFarm?: string;
}

export interface FarmAsset {
  address: string;
  label: string;
  shortLabel: string;
  symbol: Symbol;
  decimals: number | null;
  assets: Asset[];
  name?: Name;
}

export interface Asset {
  symbol: null | string;
  label: null | string;
  address: string;
  decimals: number | null;
  name?: string;
}

export enum Name {
  ChainportIoPegHORDToken = 'Chainport.io-Peg HORD Token',
  PancakeLPS = 'Pancake LPs',
  UniswapV2 = 'Uniswap V2',
  VENTViaChainPortIo = 'VENT [via ChainPort.io]',
}

export enum Symbol {
  StakingToken = 'StakingToken',
}

export enum Lp2TokenSymbol {
  Busd = 'BUSD',
  Eth = 'ETH',
  Matic = 'MATIC',
  Tfqa = 'TFQA',
  Usdc = 'USDC',
  Usdt = 'USDT',
  Wbnb = 'WBNB',
  Weth = 'WETH',
}

export interface Network {
  rpcUrl: string;
  factorySdkProxyAddress: FactorySDKProxyAddress;
  id: number;
  factoryProxyAddress: FactoryProxyAddress;
  etherscanLink: string;
  networkName: NetworkName;
  uniswapUtilsAddress: UniswapUtilsAddress | null;
  chainId: string;
  factoryVestingProxyAddress: FactoryVestingProxyAddress;
  factoryUniV3ProxyAddress: FactoryUniV3ProxyAddress | null;
  networkId: number;
  chainName: ChainName;
}

export enum ChainName {
  Arbitrum = 'arbitrum',
  Avalanche = 'avalanche',
  Binance = 'binance',
  Ethereum = 'ethereum',
  Fantom = 'fantom',
  Polygon = 'polygon',
}

export enum FactoryProxyAddress {
  The0X48328FF119Adee6D3851743092885D446DFf83Dc = '0x48328fF119Adee6d3851743092885d446dFf83dc',
  The0X529D8Bf16C5880Fc8A3Ce7Bf59AE511BA0785A2A = '0x529d8bf16c5880Fc8a3Ce7bf59aE511BA0785a2A',
  The0X5D43DDd5A298Ad1F7849C02C3A3B45Ce20436C7E = '0x5d43dDd5A298Ad1F7849C02c3a3b45ce20436C7e',
  The0X99422677992E8B89F879F3491800BF71A432068C = '0x99422677992e8b89f879f3491800bF71a432068c',
  The0XEC7BE510D3E80E447C942Ff3D0A276C81CA6Fd01 = '0xEC7bE510d3e80E447C942ff3d0a276C81CA6fd01',
  The0Xa7662565E9102476Db0F1FFC77E952D7E2Ae476B = '0xa7662565e9102476db0F1FFC77E952d7e2ae476b',
}

export enum FactorySDKProxyAddress {
  The0X022F5F44Cf92Be2A04A627760747FaF95Ae5Af64 = '0x022f5f44Cf92be2a04A627760747faF95Ae5af64',
  The0X0B8E2C14483477737EB1A377210D7E99945AB467 = '0x0B8e2c14483477737eB1a377210d7E99945AB467',
  The0X1A32400C47C1FC18593A67B9CA8021DB821F365F = '0x1A32400c47c1FC18593a67B9cA8021dB821f365f',
  The0X259Ec154744DB2530FF9952715B73A5527A5BDBD = '0x259ec154744DB2530fF9952715B73a5527a5bDBD',
  The0X2917648B9E77B6AEEA4262A2F98986E455DC17D1 = '0x2917648B9E77b6AeEA4262a2f98986E455dC17d1',
  The0X6F44F9C477Ef44B2ADEdbf783976CB8BB3B1667A = '0x6f44f9C477Ef44b2aDEdbf783976cB8bB3b1667A',
}

export enum FactoryUniV3ProxyAddress {
  The0XD425326Fb43EB189E2831D46267EAF7Dafd00A39 = '0xD425326Fb43EB189E2831d46267EAF7dafd00a39',
}

export enum FactoryVestingProxyAddress {
  The0X1Bd026Ac2AF7DC6F4183F793D5E6635F1755BbA2 = '0x1Bd026Ac2AF7DC6f4183f793d5e6635f1755bbA2',
  The0XAe27989201842BbdC2Bc92F107915E2Dea330C87 = '0xAe27989201842bbdC2bc92F107915e2dea330c87',
  The0XEC7BE510D3E80E447C942Ff3D0A276C81CA6Fd01 = '0xEC7bE510d3e80E447C942ff3d0a276C81CA6fd01',
  The0Xa7A3Ab117A8Fe36214E19463A669B8C272C20Bc7 = '0xa7A3Ab117a8fe36214E19463A669b8C272C20Bc7',
  The0XeAE5B3412F253Ef7A82F488D44FA78D384279B2E = '0xeAE5b3412F253ef7A82f488D44fA78d384279b2e',
  The0Xee6645D8Cf1903708BBbe35159243DC1B22F949B = '0xee6645D8cf1903708BBbe35159243dC1b22F949b',
}

export enum NetworkName {
  ArbMainnet = 'arb-mainnet',
  AvaxMainnet = 'avax-mainnet',
  BscMainnet = 'bsc-mainnet',
  EthMainnet = 'eth-mainnet',
  FtmMainnet = 'ftm-mainnet',
  PolyMainnet = 'poly-mainnet',
}

export enum UniswapUtilsAddress {
  The0XE4E9B9FEe20845C75C1231A9D5A8965F0DCc58Fb = '0xE4e9b9fEe20845C75c1231a9d5A8965F0dCc58fb',
}

export interface PerpetualEpoch {
  epoch_id: number;
  start_time: Date;
  end_time: Date | null;
  farm_liquidity_max: number;
  created_at: Date;
}

export enum Stage {
  Main = 'main',
}

export enum EnumFarmType {
  Lp = 'LP',
  SDK = 'SDK',
  Staking = 'STAKING',
  Univ3 = 'UNIV3',
  Vesting = 'VESTING',
}

export enum VestingStakingFarmAddress {
  The0X0000000000000000000000000000000000000000 = '0x0000000000000000000000000000000000000000',
  The0X2EE1A335C6D79B1A13Ea7742A9A538ED35E8C74D = '0x2eE1A335c6d79b1a13ea7742A9a538eD35E8c74d',
  The0XC3E912626F5C628EF056917A8EDB54152C7Cd364 = '0xC3E912626F5C628EF056917A8EDB54152C7Cd364',
}

export enum VestingType {
  IterativeVestingFarm = 'IterativeVestingFarm',
  LinearVestingFarm = 'LinearVestingFarm',
  MerkleIterativeVesting = 'MerkleIterativeVesting',
  MerkleLinearVesting = 'MerkleLinearVesting',
}
