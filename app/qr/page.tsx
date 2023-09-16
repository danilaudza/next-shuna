"use client"

import Chrome from "@uiw/react-color-chrome"
import { QRCodeSVG } from "qrcode.react"
import { useState, useEffect } from "react"

import { Input } from "@/components/ui/input"
import { Toggle } from "@/components/ui/toggle"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { convertAndDownloadPng, downloadSvg } from "./functions"
import ShunaComment from "@/components/shuna-comment"
import { StateType } from "./types"

const initialState = {
  fg: "#000000",
  isFgOpen: false,
  bg: "#ffffff",
  isBgOpen: false,
  value: "",
  size: 256,
  type: "svg",
}

const QrPage = () => {
  const [state, setState] = useState<StateType>(initialState)
  const [debouncedInputValue, setDebouncedInputValue] = useState("")

  const toggleState = (key: keyof StateType) => {
    setState({ ...state, [key]: !state[key] })
  }

  const handleChange = (e: any) => {
    setState({ ...state, value: e.target.value })
  }
  const handleSizeChange = (e: any) => {
    setState({ ...state, size: e })
  }
  const handleTypeChange = (e: any) => {
    setState({ ...state, type: e })
  }

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(state.value)
    }, 500)
    return () => clearTimeout(delayInputTimeoutId)
  }, [state.value, 500])

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 my-auto">
        <ShunaComment message="here it is !!, please create your qrcode" />
        <QRCodeSVG
          id="result"
          className="rounded-md"
          value={debouncedInputValue || "https://danilaudza.com"}
          size={state.size}
          bgColor={state.bg}
          fgColor={state.fg}
          includeMargin={true}
          level="L"
        />
        <div className="flex gap-4">
          <div className="relative">
            <Toggle onClick={() => toggleState("isFgOpen")}>
              Foreground : {state.fg}
            </Toggle>
            {state.isFgOpen && (
              <div className="absolute z-10">
                <Chrome
                  color={state.fg}
                  style={{ float: "left" }}
                  onChange={(color) => {
                    setState({ ...state, fg: color.hexa })
                  }}
                />
              </div>
            )}
          </div>
          <div className="relative">
            <Toggle onClick={() => toggleState("isBgOpen")}>
              Background : {state.bg}
            </Toggle>
            {state.isBgOpen && (
              <div className="absolute z-10">
                <Chrome
                  color={state.bg}
                  style={{ float: "left" }}
                  onChange={(color) => {
                    setState({ ...state, bg: color.hexa })
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col container max-w-3xl gap-y-4">
          <div>
            <Label>QR Value</Label>
            <Input
              value={state.value}
              onChange={handleChange}
              placeholder="https://danilaudza.com"
            />
          </div>
          <div className="flex gap-4 ">
            <div>
              <Label>Size</Label>
              <Select onValueChange={handleSizeChange} defaultValue="256">
                <SelectTrigger className="">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="256">256x256 px</SelectItem>
                  <SelectItem value="512">512x512 px</SelectItem>
                  <SelectItem value="1024">1024x1024 px</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Download as</Label>
              <Select onValueChange={handleTypeChange} defaultValue="svg">
                <SelectTrigger className="">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="svg">Svg</SelectItem>
                  <SelectItem value="png">Png</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Button
          onClick={state.type == "svg" ? downloadSvg : convertAndDownloadPng}
        >
          Download
        </Button>
      </div>
    </>
  )
}

export default QrPage
