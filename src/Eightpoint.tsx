import { createSignal } from "solid-js";
import EightpointHeader from "./components/EightPointHeader";
import { A } from "@solidjs/router";

const Eightpoint = () => {
  const [htl, sethTl] = createSignal(0);
  const [vtl, setvTl] = createSignal(0);
  const [htr, sethTr] = createSignal(0);
  const [vtr, setvTr] = createSignal(0);
  const [hbl, sethbl] = createSignal(0);
  const [vbl, setvbl] = createSignal(0);
  const [hbr, sethbr] = createSignal(0);
  const [vbr, setvbr] = createSignal(0);
  return (
    <main class=" bg-blue-300 w-full h-svh">
      <EightpointHeader />
      <div class={`subject flex flex-col items-center justify-center `}>
        <div
          class="bg-white w-200 h-100 border-3 border-black mb-12"
          style={{
            "border-radius": `${htl()}% ${htr()}% ${hbr()}% ${hbl()}% / ${vtl()}% ${vtr()}% ${vbr()}% ${vbl()}%`,
          }}
        ></div>
        <div class="inputs grid grid-cols-2 gap-3">
          <div class="input flex flex-col">
            <label for="htl">Horizontal Top Left %</label>
            <input
              id="htl"
              type="number"
              placeholder="Horizntal Top Left"
              class="bg-white border-4 border-black p-3 rounded-xl"
              value={htl()}
              onInput={(e) => sethTl(e.currentTarget.value)}
            />
          </div>
          <div class="input flex flex-col">
            <label for="vtl">Vertical Top Left %</label>
            <input
              id="vtl"
              type="number"
              placeholder="Top Left"
              class="bg-white border-4 border-black p-3 rounded-xl"
              value={vtl()}
              onInput={(e) => setvTl(e.currentTarget.value)}
            />
          </div>

          <div class="input flex flex-col">
            <label for="htr">Horizontal Top Right %</label>
            <input
              id="htr"
              type="number"
              placeholder="Top Right"
              class="bg-white border-4 border-black p-3 rounded-xl"
              value={htr()}
              onInput={(e) => sethTr(e.currentTarget.value)}
            />
          </div>
          <div class="input flex flex-col">
            <label for="vtr">Vertical Top Right %</label>
            <input
              id="vtr"
              type="number"
              placeholder="Top Right"
              class="bg-white border-4 border-black p-3 rounded-xl"
              value={vtr()}
              onInput={(e) => setvTr(e.currentTarget.value)}
            />
          </div>

          <div class="input flex flex-col">
            <label for="hbl">Horizontal Bottom Left %</label>
            <input
              id="hbl"
              type="number"
              placeholder="Bottom Left"
              class="bg-white border-4 border-black p-3 rounded-xl"
              value={hbl()}
              onInput={(e) => sethbl(e.currentTarget.value)}
            />
          </div>
          <div class="input flex flex-col">
            <label for="vbl">Vertical Bottom Left %</label>
            <input
              id="vbl"
              type="number"
              placeholder="Bottom Left"
              class="bg-white border-4 border-black p-3 rounded-xl"
              value={vbl()}
              onInput={(e) => setvbl(e.currentTarget.value)}
            />
          </div>

          <div class="input flex flex-col">
            <label for="hbr">Horizontal Bottom Right %</label>
            <input
              id="hbr"
              type="number"
              placeholder="Bottom Right"
              class="bg-white border-4 border-black p-3 rounded-xl"
              value={hbr()}
              onInput={(e) => sethbr(e.currentTarget.value)}
            />
          </div>
          <div class="input flex flex-col">
            <label for="vbr">Vertical Bottom Right %</label>
            <input
              id="vbr"
              type="number"
              placeholder="Bottom Right"
              class="bg-white border-4 border-black p-3 rounded-xl"
              value={vbr()}
              onInput={(e) => setvbr(e.currentTarget.value)}
            />
          </div>
        </div>
      </div>
      <A href="/" class="underline">Normal Border radius</A>
    </main>
  );
};

export default Eightpoint;
