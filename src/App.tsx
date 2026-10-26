import { createSignal } from "solid-js";
import Header from "./components/Header";
import { A } from "@solidjs/router";

const App = () => {
  const [tl, setTl] = createSignal(0);
  const [tr, setTr] = createSignal(0);
  const [bl, setbl] = createSignal(0);
  const [br, setbr] = createSignal(0);
  return (
    <main class=" bg-blue-300 w-full h-svh">
      <Header />
      <div class={`subject flex flex-col items-center justify-center`}>
        <div
          class="bg-white w-200 h-100 border-3 border-black mb-12"
          style={{
            "border-top-left-radius": `${tl()}px`,
            "border-top-right-radius": `${tr()}px`,
            "border-bottom-left-radius": `${bl()}px`,
            "border-bottom-right-radius": `${br()}px`,
          }}
        ></div>
        <div class="inputs grid grid-cols-2 gap-3">
          <div class="input flex flex-col">
            <label for="tl">Top Left</label>
            <input
              id="tl"
              type="number"
              placeholder="Top Left"
              class="bg-white border-4 border-black p-3 rounded-xl"
              value={tl()}
              onInput={(e) => setTl(e.currentTarget.value)}
            />
          </div>

          <div class="input flex flex-col">
            <label for="tr">Top Right</label>
            <input
              id="tr"
              type="number"
              placeholder="Top Right"
              class="bg-white border-4 border-black p-3 rounded-xl"
              value={tr()}
              onInput={(e) => setTr(e.currentTarget.value)}
            />
          </div>
          <div class="input flex flex-col">
            <label for="bl">Bottom Left</label>
            <input
              id="bl"
              type="number"
              placeholder="Bottom Left"
              class="bg-white border-4 border-black p-3 rounded-xl"
              value={bl()}
              onInput={(e) => setbl(e.currentTarget.value)}
            />
          </div>
          <div class="input flex flex-col">
            <label for="br">Bottom Right</label>
            <input
              id="br"
              type="number"
              placeholder="Bottom Right"
              class="bg-white border-4 border-black p-3 rounded-xl"
              value={br()}
              onInput={(e) => setbr(e.currentTarget.value)}
            />
          </div>
        </div>
      </div>
      <A href="/eightpoint" class="underline">8 Point Border radius</A>
    </main>
  );
};

export default App;
