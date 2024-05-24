"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import React, {useState, useEffect} from "react"

export default function Pedidos() {
 
  return (
    <main className="flex w-full min-h-screen flex-col items-center bg-gray-900 ">
      <div className="flex flex-row w-full items-center">
        <div className="flex-col w-[50%] min-h-screen items-center justify-center bg-slate-50">
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
        <div className="flex flex-col w-[50%] min-h-screen items-center justify-center bg-slate-900">
        
        </div>  
      </div>      
    </main>
  );
}