import { NextRequest, NextResponse } from "next/server";
import { executeQuery } from "@/lib/db";

// 商品データの配列
type Product = {
  id: number;
  name: string;
  price: string;
  img_url?: string | null;
  review_avg?: number;
  review_count?: number;
  stock?: number;
  updated_at?: string;
};

// 全データ取得
export async function GET() {
  try {
    const products = await executeQuery<Product[]>('SELECT * FROM products;');
    return NextResponse.json(products);
  } catch (err) {
    console.error('商品取得エラー：',err);
    return NextResponse.json({message: 'サーバーエラーが発生しました。'}, {status: 500});
  }
}