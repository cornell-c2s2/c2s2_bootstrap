import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// FA23
import ABlinkIntoSiliconsPotential from "../blogposts/FA23/ABlinkIntoSiliconsPotential";
import ChippingAwayAtChallenges from "../blogposts/FA23/ChippingAwayAtChallenges";
import DesigningAndSynthesizingABetterFFT from "../blogposts/FA23/DesigningAndSynthesizingABetterFFT";
import DigitalArt from "../blogposts/FA23/DigitalArt";
import ElectronicDesignAutomation from "../blogposts/FA23/ElectronicDesignAutomation";
import FromSandToSilicon from "../blogposts/FA23/FromSandToSilicon";
import HelloWorld from "../blogposts/FA23/HelloWorld";
import IterativeVsUnrolledCalculations from "../blogposts/FA23/IterativeVsUnrolledCalculations";
import MallocFromScratch from "../blogposts/FA23/MallocFromScratch";
import PCBDesign from "../blogposts/FA23/PCBDesign";
import RepresentingNumbersInHardware from "../blogposts/FA23/RepresentingNumbersInHardware";
import TestAndValOfPCBs from "../blogposts/FA23/TestAndValOfPCBs";
import TheAnalogSubteamProcessFlow from "../blogposts/FA23/TheAnalogSubteamProcessFlow";
import UnravelingBirdSoundsWithSpectrograms from "../blogposts/FA23/UnravelingBirdSoundsWithSpectrograms";

// FA24
import AnikaAnalog from "../blogposts/FA24/AnikaAnalog";
import GroundUp from "../blogposts/FA24/GroundUp";
import TanyaSoftware from "../blogposts/FA24/TanyaSoftware";
import Unboxing from "../blogposts/FA24/Unboxing";
import VayunDigital from "../blogposts/FA24/VayunDigital";

// SP23
import AnalogMultiplexer from "../blogposts/SP23/AnalogMultiplexer";
import ConstantGmCurrentReferenceTapeIn from "../blogposts/SP23/ConstantGmCurrentReferenceTapeIn";
import CrashDetectorsCalculators from "../blogposts/SP23/CrashDetectors&Calculators";
import DeserializerAndTapeOutUpdate from "../blogposts/SP23/DeserializerAndTapeOutUpdate";
import ISPI from "../blogposts/SP23/ISPI";
import MagicVLSIvsCadenceVirtuoso from "../blogposts/SP23/MagicVLSIvsCadenceVirtuoso";
import ProgressReport from "../blogposts/SP23/ProgressReport";
import ProgressReport4_23_23 from "../blogposts/SP23/ProgressReport4_23_23";
import ProgressReportMarch2023 from "../blogposts/SP23/ProgressReportMarch2023";
import SiliconForScrubJays from "../blogposts/SP23/SiliconForScrubJays";
import SoftwareAndRelativePositionEstimator from "../blogposts/SP23/SoftwareAndRelativePositionEstimator";
import SPIMinionAdapterPythonTools from "../blogposts/SP23/SPIMinion-Adapter-PythonTools";
import SystemArchitectureBlogPost from "../blogposts/SP23/SystemArchitectureBlogPost";
import SystemArchitectureProgressReport from "../blogposts/SP23/SystemArchitectureProgressReport";
import TheProcessOfAcquiringSponsors from "../blogposts/SP23/TheProcessOfAcquiringSponsors";
import TwoSidesOfACoin from "../blogposts/SP23/TwoSidesOfACoin";

// SP24
import ASICDesignFlow from "../blogposts/SP24/ASICDesignFlow";
import ChipChatter from "../blogposts/SP24/ChipChatter";
import chooseFighter from "../blogposts/SP24/chooseFighter";
import CMake from "../blogposts/SP24/CMake";
import GDS from "../blogposts/SP24/GDS";
import ImgSilicon from "../blogposts/SP24/ImgSilicon";
import Magic from "../blogposts/SP24/Magic";
import NotEasy from "../blogposts/SP24/NotEasy";
import OverCloud from "../blogposts/SP24/OverCloud";
import ScrubJay from "../blogposts/SP24/ScrubJay";
import TechnicalPM from "../blogposts/SP24/TechnicalPM";
import TwoWorlds from "../blogposts/SP24/TwoWorlds";
import VerifyBetterFFT from "../blogposts/SP24/VerifyBetterFFT";

// SP26
import RidwanahBLIMP from "../blogposts/SP26/RidwanahBLIMP";
import AmbilaIMU from "../blogposts/SP26/AmbilaIMU";

// This component will render a single blog post
function BlogPost() {
  const BlogComponents = {
    // FA23 Blog Posts
    ABlinkIntoSiliconsPotential: ABlinkIntoSiliconsPotential,
    ChippingAwayAtChallenges: ChippingAwayAtChallenges,
    DesigningAndSynthesizingABetterFFT: DesigningAndSynthesizingABetterFFT,
    DigitalArt: DigitalArt,
    ElectronicDesignAutomation: ElectronicDesignAutomation,
    FromSandToSilicon: FromSandToSilicon,
    HelloWorld: HelloWorld,
    IterativeVsUnrolledCalculations: IterativeVsUnrolledCalculations,
    MallocFromScratch: MallocFromScratch,
    PCBDesign: PCBDesign,
    RepresentingNumbersInHardware: RepresentingNumbersInHardware,
    TestAndValOfPCBs: TestAndValOfPCBs,
    TheAnalogSubteamProcessFlow: TheAnalogSubteamProcessFlow,
    UnravelingBirdSoundsWithSpectrograms: UnravelingBirdSoundsWithSpectrograms,

    // FA24 Blog Posts
    anikaanalog: AnikaAnalog,
    groundUp: GroundUp,
    tanyasoftware: TanyaSoftware,
    unboxing: Unboxing,
    VayunDigital: VayunDigital,

    // SP23 Blog Posts
    AnalogMultiplexer: AnalogMultiplexer,
    ConstantGmCurrentReferenceTapeIn: ConstantGmCurrentReferenceTapeIn,
    CrashDetectorsAndCalculators: CrashDetectorsCalculators,
    DeserializerAndTapeOutUpdate: DeserializerAndTapeOutUpdate,
    ISPI: ISPI,
    MagicVLSIvsCadenceVirtuoso: MagicVLSIvsCadenceVirtuoso,
    ProgressReport: ProgressReport,
    ProgressReport4_23_23: ProgressReport4_23_23,
    ProgressReportMarch2023: ProgressReportMarch2023,
    SiliconForScrubJays: SiliconForScrubJays,
    SoftwareAndRelativePositionEstimator: SoftwareAndRelativePositionEstimator,
    SPIMinionAdapterPythonTools: SPIMinionAdapterPythonTools,
    SystemArchitectureBlogPost: SystemArchitectureBlogPost,
    SystemArchitectureProgressReport: SystemArchitectureProgressReport,
    TheProcessOfAcquiringSponsors: TheProcessOfAcquiringSponsors,
    TwoSidesOfACoin: TwoSidesOfACoin,

    // SP26 Blog Posts
    RidwanahBLIMP: RidwanahBLIMP,
    AmbilaIMU: AmbilaIMU,

    // SP24 Blog Posts
    ASICDesignFlow: ASICDesignFlow,
    ChipChatter: ChipChatter,
    chooseFighter: chooseFighter,
    CMake: CMake,
    GDS: GDS,
    ImgSilicon: ImgSilicon,
    Magic: Magic,
    NotEasy: NotEasy,
    OverCloud: OverCloud,
    ScrubJay: ScrubJay,
    TechnicalPM: TechnicalPM,
    TwoWorlds: TwoWorlds,
    VerifyBetterFFT: VerifyBetterFFT,
  };

  const location = useLocation();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract URL details whenever the location changes
    const pathId = location.pathname.split("/").pop();

    // Get chip data from imported JSON
    const selectedBlog = BlogComponents[pathId];
    setBlog(selectedBlog);
    setLoading(false);
  }, [location]);

  return <>{blog}</>;
}

export default BlogPost;
