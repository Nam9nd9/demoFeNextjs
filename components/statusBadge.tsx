"use client";

import React from "react";
import {
  CheckCircleOutline,
  PendingActionsOutlined,
  CurrencyExchangeOutlined,
  BlockOutlined,
  RestartAlt,
  LocalShippingOutlined,
  Check,
  MonetizationOnOutlined,
  HourglassBottomOutlined,
  Inbox,
  MoveToInbox,
  Moped,
  Block,
} from "@mui/icons-material";

interface StatusBadgeProps {
  type: "inspection_status" | "purchase_status" | "product_status" | "invoice_status" | "payment_status" | "delivery_status";
  value: string;
  dry_stock?: boolean;
}

export default function StatusBadge({ type, value, dry_stock }: StatusBadgeProps) {
  switch (type) {
    case "inspection_status":
      switch (value) {
        case "Đã kiểm xong":
          return (
            <div className="px-3 py-1 rounded-full font-semibold text-[#234904] bg-[#DEFAC2] flex items-center gap-1">
              <CheckCircleOutline fontSize="small" />
              {value}
            </div>
          );
        case "Đang kiểm":
          return (
            <div className="px-3 py-1 rounded-full font-semibold text-[#663300] bg-[#FCF3C5] flex items-center gap-1">
              <PendingActionsOutlined fontSize="small" />
              {value}
            </div>
          );
      }
      break;

    case "purchase_status":
      switch (value) {
        case "Đã nhập chưa thanh toán":
          return (
            <div className="px-3 py-1 rounded-full font-semibold text-[#17489E] bg-[#DEE9FC] flex items-center gap-1">
              {value}
            </div>
          );
        case "Đã nhập đã thanh toán":
          return (
            <div className="px-3 py-1 rounded-full  font-semibold text-[#234904] bg-[#DEFAC2] flex items-center gap-1">
              {value}
            </div>
          );
        case "Đang giao dịch":
          return (
            <div className="px-3 py-1 rounded-full  font-semibold text-[#663300] bg-[#FCF3C5] flex items-center gap-1 ">
              {value}
            </div>
          );
      }
      break;

      case "product_status":
        switch (dry_stock ? "Đang giao dịch" : "Ngừng giao dịch") {
          case "Đang giao dịch":
            return (
              <div className="px-3 py-1 rounded-full font-semibold text-[#663300] bg-[#FCF3C5] flex items-center gap-1">
                <CurrencyExchangeOutlined fontSize="small" />
                Đang giao dịch
              </div>
            );
          case "Ngừng giao dịch":
            return (
              <div className="px-3 py-1 rounded-full font-semibold text-[#8C000E] bg-[#FCE1DE] flex items-center gap-1 ">
                <BlockOutlined fontSize="small" />
                Ngừng bán
              </div>
            );
        }

    case "invoice_status":
      switch (value) {
case "CANCEL":
          return (
            <div className="flex items-center font-semibold  px-3 py-1 rounded-full text-[#B8000A] bg-[#FFDFDB]">
              <BlockOutlined className="mr-2" fontSize="small" />
              Đã hủy
            </div>
          );
        case "DELIVERING":
          return (
            <div className="flex items-center font-semibold  px-3 py-1 rounded-full text-[#805B00] bg-[#FFF6CC] ">
              <LocalShippingOutlined className="mr-2" fontSize="small" />
              Đang vận chuyển
            </div>
          );
        case "DELIVERED":
          return (
            <div className="flex items-center font-semibold  px-3 py-1 rounded-full text-[#336B05] bg-[#E6FDCE] ">
              <Check className="mr-2" fontSize="small" />
              Đã hoàn thành
            </div>
          );
        case "TRANSACTION":
          return (
            <div className="flex items-center font-semibold  px-3 py-1 rounded-full text-[#0041B2] bg-[#E5EFFF]">
              <RestartAlt className="mr-2" fontSize="small" />
              Đang giao dịch
            </div>
          );
      }
      break;

    case "payment_status":
      switch (value) {
        case "PAYMENT":
          return (
            <div className="flex items-center font-semibold  px-3 py-1 rounded-full text-[#336B05] bg-[#E6FDCE]">
              <Check className="mr-2" fontSize="small" />
              Đã thanh toán
            </div>
          );
        case "PARTIAL_PAYMENT":
          return (
            <div className="flex items-center font-semibold  px-3 py-1 rounded-full text-[#805B00] bg-[#FFF6CC] ">
              <HourglassBottomOutlined className="mr-2" fontSize="small" />
              Thanh toán 1 phần
            </div>
          );
        case "UNPAID":
          return (
            <div className="flex items-center font-semibold  px-3 py-1 rounded-full text-[#B8000A] bg-[#FFDFDB]">
              <MonetizationOnOutlined className="mr-2" fontSize="small" />
              Chưa thanh toán
            </div>
          );
      }
      break;

      case "delivery_status":
      switch (value) {
        case "TRANSACTION":
          return (
            <div className="px-3 py-1 rounded-full font-semibold  flex items-center gap-1 bg-[#DEE9FC] text-[#163369]">
              <CurrencyExchangeOutlined className="mr-2" fontSize="small" />
              Chờ giao hàng
            </div>
          );
        case "RETURNING":
          return (
            <div className="flex items-center px-3 py-1 rounded-full text-[#80000D] bg-[#FCE1DE] ">
              <Inbox className="mr-2" fontSize="small" />
              Hủy giao chờ nhận
            </div>
          );
        case "RETURNED":
          return (
            <div className="flex items-center font-semibold  px-3 py-1 rounded-full text-[#B8000A] bg-[#FFDFDB] ">
              <MoveToInbox className="mr-2" fontSize="small" />
              Hủy giao đã nhận
            </div>
          );
        case "PICKING":
        return (
          <div className="flex items-center font-semibold  px-3 py-1 rounded-full text-[#5C2E00] bg-[#FCF3C5] ">
            <Moped className="mr-2" fontSize="small" />
            Đang vận chuyển
          </div>
        );
        case "DELIVERED":
        return (
          <div className="flex items-center font-semibold  px-3 py-1 rounded-full  bg-[#DEFAC2] ">
            <Check className="mr-2" fontSize="small" />
            Giao hàng thành công
          </div>
        );
        case "CANCEL":
        return (
          <div className="flex items-center font-semibold  px-3 py-1 rounded-full text-[#80000D] bg-[#FCE1DE] ">
            <Block className="mr-2" fontSize="small" />
            Huỷ đơn
          </div>
        );
      }
      break;

    default:
      return (
        <div className="px-3 py-1 rounded-full font-semibold bg-gray-200 text-gray-600 flex items-center gap-1">
          {value}
        </div>
      );
  }
}

