import { NextResponse } from "next/server";
import {
  promotionData,
  promotionLink,
  SocialMediaLinks,
  Commitments,
  Facts,
  Strengths,
  bannerItems,
  carrer,
  difference,
  navItems,
  updatesData,
} from "@/app/lib/data";

export function GET() {
  return NextResponse.json({
    promotionData,
    promotionLink,
    SocialMediaLinks,
    Commitments,
    Facts,
    Strengths,
    bannerItems,
    carrer,
    difference,
    navItems,
    updatesData,
  });
}
