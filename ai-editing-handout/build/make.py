#!/usr/bin/env python3
"""產生 AI 剪輯課講義 HTML（再由 Chromium 轉 PDF）。"""
import html, sys, pathlib

# 每列：(編號, 情境, 提示詞, 工具, 預期結果)
CH = []

def chapter(title, intro, rows, tip=None):
    CH.append((title, intro, rows, tip))

# ───────────────────────── 第 1 章 環境安裝 ─────────────────────────
chapter("第 1 章　環境安裝：Node.js 與開發環境",
 "把下面的提示詞貼給任何 AI 助理（Claude / ChatGPT / Claude Code），請它帶你一步一步完成。每一步做完，把終端機輸出貼回去，讓 AI 判斷是否成功。",
 [
 ("1-1","判斷作業系統","我是剪輯課學員，完全沒寫過程式。請先問我用的是 Windows 還是 Mac、系統版本，再依我的答案，用「一次一步」的方式帶我安裝。每一步都告訴我：要開哪個程式、要貼什麼指令、成功時畫面長怎樣、失敗時怎麼辦。","ChatGPT / Claude","AI 先問系統，再逐步引導"),
 ("1-2","安裝 Node.js","請帶我在【Windows / Mac】安裝 Node.js 的 LTS（長期支援）版本。請告訴我官方下載網址，安裝完成後如何用 node -v 與 npm -v 確認版本，並說明 npm 是什麼（用一句白話）。","ChatGPT / Claude","node -v 顯示版本號"),
 ("1-3","開啟終端機","請教我怎麼開啟終端機（Windows 用 PowerShell、Mac 用 Terminal），並教我 5 個最常用的指令：cd、ls（Windows 為 dir）、mkdir、pwd、清除畫面。每個指令給一個範例。","ChatGPT / Claude","學員能切換資料夾"),
 ("1-4","安裝 ffmpeg","請帶我安裝 ffmpeg，並用 ffmpeg -version 確認。Windows 請用 winget 或 Chocolatey，Mac 請用 Homebrew；若我沒有 Homebrew，請先教我安裝。","ChatGPT / Claude","ffmpeg 版本資訊出現"),
 ("1-5","安裝程式碼編輯器","請帶我安裝 VS Code，並推薦剪輯課需要的 3 個擴充套件（例如 ES7 React snippets、Prettier）。說明如何用 VS Code 開啟一個資料夾。","ChatGPT / Claude","VS Code 可開啟專案"),
 ("1-6","安裝 Claude Code（選配）","請帶我安裝 Claude Code CLI，說明如何登入、如何在專案資料夾啟動它，以及三個安全使用原則（先看它要改什麼再同意、不要貼密碼、重要檔案先備份）。","Claude Code","claude 指令可啟動"),
 ("1-7","環境總檢查","我剛完成 Node.js、ffmpeg、VS Code 的安裝。請給我一份「環境檢查清單」：列出要執行的指令與預期結果。我會把結果貼給你，請你判斷哪一項有問題並指導修正。","ChatGPT / Claude","所有檢查項通過"),
 ("1-8","常見錯誤排除","我執行【指令】時出現以下錯誤，請用白話解釋原因，並依可能性高低列出 3 個解法，從最簡單的開始。錯誤訊息如下：\n【貼上完整錯誤訊息】","ChatGPT / Claude","取得可執行的修正步驟"),
 ])

# ───────────────────────── 第 2 章 Remotion ─────────────────────────
chapter("第 2 章　Remotion 安裝與專案設定",
 "Remotion 是用 React 寫影片的框架。重點：影片 = 一個函式，輸入「第幾格」，輸出「這一格的畫面」。",
 [
 ("2-1","建立專案","請帶我用 npx create-video@latest 建立 Remotion 專案。專案名稱 my-first-video，範本選 Blank。請說明每個提問該怎麼選，以及完成後資料夾裡各檔案（src/Root.tsx、src/Composition 等）的用途。","Terminal","專案資料夾建立"),
 ("2-2","啟動預覽","請告訴我進入專案資料夾後，如何啟動 Remotion Studio（npm run dev 或 npx remotion studio），瀏覽器網址是什麼，以及畫面上時間軸、屬性面板、渲染按鈕各是做什麼用的。","Terminal","Studio 在瀏覽器開啟"),
 ("2-3","設定影片規格","請修改 Root.tsx，把 Composition 設成：直式 1080x1920、30 fps、長度 15 秒。並用註解說明 width、height、fps、durationInFrames 四個欄位的意思。","Claude Code","直式 9:16 畫布"),
 ("2-4","第一支文字動畫","請在現有專案新增一個元件：畫面中央顯示標題「AI 剪輯入門」，用 spring 動畫從下方彈入，持續 1 秒後淡出。請使用 useCurrentFrame 與 interpolate，並在程式裡加上簡單中文註解。","Claude Code","標題彈入淡出"),
 ("2-5","匯入影片素材","請教我把一支 mp4 放進專案的 public 資料夾，並用 <OffthreadVideo> 與 staticFile() 在 Composition 中播放。若影片比畫布長，如何用 startFrom / endAt 只取其中一段？","Claude Code","影片可播放"),
 ("2-6","安裝字型","我想在 Remotion 使用「Noto Sans TC」。請教我安裝 @remotion/google-fonts 並載入字型，確保渲染時中文不會變成方框。附上使用範例。","Claude Code","中文字型正確顯示"),
 ("2-7","匯出影片","請告訴我如何用 npx remotion render 把 Composition 輸出成 mp4，並說明 --codec、--crf、--concurrency 的用途。再給我「快速預覽版」與「高品質成品版」兩組指令。","Terminal","輸出 mp4"),
 ("2-8","授權提醒","請用白話整理 Remotion 的授權規則：個人、教學、小型團隊與企業分別怎麼算，我需要在哪裡確認最新條款？請附官方網址，並提醒我以官網為準。","ChatGPT / Claude","理解授權範圍"),
 ])

# ───────────────────────── 第 3 章 AI 字幕 ─────────────────────────
chapter("第 3 章　語音轉文字與字幕自動化",
 "好的剪輯從好的逐字稿開始。先把口播轉成「有時間碼的逐字稿」，後面刪贅字、跳剪、字幕都靠它。",
 [
 ("3-1","產生逐字稿","請教我在 Remotion 專案用 @remotion/install-whisper-cpp 安裝 Whisper，並對 public/input.mp4 產生逐字稿，輸出成含「每個字起訖毫秒」的 JSON。語言設為中文，模型選 medium。","Claude Code","word-level JSON"),
 ("3-2","簡繁與錯字校正","以下是語音辨識產生的逐字稿。請：①全部轉為繁體中文（台灣用語）；②修正明顯錯字與同音字；③保留原本的分行與時間碼，不要合併或刪除任何一行。只輸出修正後內容。\n【貼上逐字稿】","ChatGPT / Claude","乾淨的繁中逐字稿"),
 ("3-3","專有名詞詞庫","我的影片會出現這些專有名詞：【Remotion、ChatCut、Node.js、北科大…】。請以此建立校正詞庫，檢查逐字稿中所有可能被誤聽的地方並統一寫法。","ChatGPT / Claude","名詞統一"),
 ("3-4","字幕元件","請在 Remotion 寫一個 <Captions> 元件：讀取 words.json，每個字出現時有 pop 縮放效果；目前正在念的字用黃色高亮；每行最多 12 個中文字，自動換行；字幕位於畫面下方 20% 處，白字黑色描邊。","Claude Code","逐字彈跳字幕"),
 ("3-5","關鍵字高亮","請在字幕元件加入「關鍵字高亮」：我提供關鍵字清單 ['免費','三步驟','限時']，凡出現的字就改成紅色並放大 1.2 倍。清單做成可在檔案頂端修改的陣列。","Claude Code","關鍵字紅字放大"),
 ("3-6","匯出 SRT","請把 words.json 轉成標準 .srt 字幕檔：每段 2 秒至 5 秒、每行不超過 14 字、斷句要在語意自然處（標點或語氣停頓），不可在詞語中間切斷。","ChatGPT / Claude","可上傳 YouTube 的 SRT"),
 ])

# ───────────────────────── 第 4 章 去贅字去重複 ─────────────────────────
chapter("第 4 章　語音內容剪輯：刪贅字、刪重複、去 NG",
 "核心原則：逐字稿上的每個決定，都要能對應回時間碼。先請 AI 「列出建議刪除清單」，你確認後再執行，避免誤刪。",
 [
 ("4-1","刪除贅字","請檢視以下逐字稿，找出所有贅字與語助詞（嗯、呃、啊、欸、那個、就是、然後、對對對、你知道嗎）。只標出「對語意沒有貢獻」的，不要動句子中有意義的「然後、就是」。輸出表格：行號｜原文｜建議刪除的字｜起訖時間。\n【貼上含時間碼逐字稿】","ChatGPT / Claude / Claude Code","贅字刪除清單"),
 ("4-2","刪除重複（保留後者）","逐字稿中，我常會把同一句話講好幾次直到滿意。請找出「連續或相近位置的重複句」（語意相同或前半句相同），規則：前面講的一律刪除，只保留最後一次完整版本。若最後一次比前面短或不完整，請標示出來讓我人工決定。輸出：保留段｜刪除段（含時間碼）｜判斷理由。","ChatGPT / Claude / Claude Code","重複只留最後版"),
 ("4-3","偵測 NG 重錄","請找出口誤、卡住、重講的片段，特徵：句子講到一半中斷後又重頭開始、出現「不好意思」「再來一次」「重來」等詞。請把整段 NG（從中斷點往前到該句開頭）標為刪除，保留重講後的完整句。","Claude Code","NG 段落清單"),
 ("4-4","刪除靜音","請根據 words.json，找出字與字之間超過 0.6 秒的停頓，將停頓縮短為 0.15 秒（保留呼吸感，不要完全切死）。開頭與結尾的靜音完全移除。輸出新的 segments.json，格式為 [{start,end}]。","Claude Code","跳剪片段清單"),
 ("4-5","語意壓縮（精簡口播）","以下是 3 分鐘口播逐字稿。請在「不改變原意、不新增資訊」前提下，刪減為約 90 秒的版本：刪離題、重複舉例、過長鋪陳；保留原話，不要改寫成書面語。用刪除線標出刪掉的部分，我需要知道被刪的是什麼。","ChatGPT / Claude","精簡版口播"),
 ("4-6","依清單自動剪輯","請讀取 segments.json，在 Remotion 用 <Sequence> 依序拼接各片段（from 為累加幀數，OffthreadVideo 用 startFrom 取片段起點）。片段與片段之間不要有黑畫面，總長要等於各片段長度加總。","Claude Code","自動拼接剪輯"),
 ("4-7","刪除前最終確認","在真正刪除前，請用白話總結：預計刪除多少秒、占原片幾 %、共幾處；列出「風險最高的 5 處刪除」（可能切到有意義內容），讓我逐一確認。","ChatGPT / Claude","風險檢查清單"),
 ("4-8","只刪我指定的","只刪除我在下方標記【】的部分，其他一字不動，並重新輸出完整逐字稿與新時間碼。\n【貼上標記後的逐字稿】","ChatGPT / Claude","精準刪除"),
 ])

# ───────────────────────── 第 5 章 ChatCut ─────────────────────────
chapter("第 5 章　ChatCut：用對話剪輯",
 "ChatCut 用聊天的方式下指令。下指令的三要素：對象（哪一段）＋動作（做什麼）＋程度（多少）。越具體，結果越穩定。",
 [
 ("5-1","匯入與整理","請把我匯入的素材依拍攝順序排列，並辨識出：口播主畫面、B-roll、錄螢幕畫面三類，分別標上顏色或標籤。","ChatCut","素材分類"),
 ("5-2","粗剪","請把口播主畫面中的靜音、嗯呃等贅字與 NG 重錄剪掉，重複的句子只保留最後一次。剪完後告訴我總長度與刪了幾處。","ChatCut","粗剪版本"),
 ("5-3","逐步修正","第 3 個片段的第 8 秒到第 11 秒不要刪，請還原。其他維持現狀。","ChatCut","局部還原"),
 ("5-4","加字幕","請為全片加上繁體中文字幕，字體黑體粗體，白字黑描邊，位置畫面下方三分之一處，每行不超過 12 字。","ChatCut","字幕完成"),
 ("5-5","加 B-roll","在我提到【產品名稱】的時候，插入對應的 B-roll 畫面 2 秒，口播聲音不中斷。找不到合適畫面的地方請列出，讓我自己補。","ChatCut","B-roll 覆蓋"),
 ("5-6","背景音樂","加入輕快、無歌詞的背景音樂，音量為口播的 15%；人聲出現時自動壓低，影片結尾 2 秒漸弱。","ChatCut","BGM 混音"),
 ("5-7","節奏檢查","請檢視全片，指出節奏拖慢的地方（超過 5 秒沒有畫面變化），並建議使用的處理方式：加縮放、換景別、插 B-roll 或剪掉。","ChatCut","節奏診斷"),
 ("5-8","輸出","輸出為 1080x1920、30fps、mp4，檔案大小控制在 100MB 內，適合上傳 Instagram Reels。","ChatCut","成品"),
 ])

# ───────────────────────── 第 6 章 運鏡與縮放 ─────────────────────────
chapter("第 6 章　縮放、運鏡：什麼時候前進、什麼時候後退",
 "「前進」＝推進／放大（Punch-in、Zoom-in）：把觀眾拉向主體，增加強度與情緒。「後退」＝拉遠／縮小（Pull-out、Zoom-out）：釋放壓力、交代環境、帶出結論。一個簡單口訣：說重點往前推，講完退一步。",
 [
 ("6-1","前進（推進）時機","請根據逐字稿，標出適合使用「推進／Punch-in」的句子：①強調關鍵結論；②情緒升高；③數字或金額；④呼籲行動（CTA）；⑤開頭的 Hook。每一處給時間碼與建議放大倍率（1.1～1.3）。","ChatGPT / Claude","推進點清單"),
 ("6-2","後退（拉遠）時機","請標出適合使用「拉遠／Pull-out」的位置：①講完一個重點要換話題；②交代背景或全貌；③需要喘息、釋放情緒；④結尾收束。每一處給時間碼與建議速度。","ChatGPT / Claude","拉遠點清單"),
 ("6-3","隔段 Punch-in","請在 Remotion 做「隔段縮放」：每個跳剪片段交替使用 100% 與 115% 縮放，縮放中心在人臉位置（畫面上方 40%），不要有動畫過渡（硬切），這樣畫面看起來像雙機位。","Claude Code","雙機位效果"),
 ("6-4","緩慢推進","請在 Remotion 做「緩慢推進」：整段口播在 8 秒內從 100% 平滑放大到 108%，使用 Easing.inOut(Easing.quad)，transformOrigin 設在人物臉部。","Claude Code","慢推鏡頭"),
 ("6-5","拉遠收尾","請寫一個結尾拉遠效果：最後 1.5 秒由 115% 縮回 100%，同時背景音樂漸弱，最後一格停留 0.5 秒。","Claude Code","結尾收束"),
 ("6-6","節奏規則","請替我訂定縮放節奏守則：多久換一次景別、連續兩次推進之間至少間隔幾秒、什麼情況不該縮放（例如：字幕或人臉會被切掉的時候）。以表格呈現。","ChatGPT / Claude","節奏守則"),
 ("6-7","安全區檢查","縮放之後，人臉與字幕是否仍在 9:16 的安全區內？請檢查並指出超出的時間點，建議修正的縮放上限。","Claude Code","安全區檢查"),
 ])

# ───────────────────────── 第 7 章 轉場 ─────────────────────────
chapter("第 7 章　轉場與剪接手法",
 "轉場不是越多越好。原則：能硬切就硬切；轉場只用來「告訴觀眾時間、空間、情緒有變」。",
 [
 ("7-1","硬切 Hard cut","請說明什麼情況最適合直接硬切（口播跳剪、同場景動作接動作、節奏緊湊），並給 3 個適合與 3 個不適合的例子。","ChatGPT / Claude","判斷依據"),
 ("7-2","J-Cut","請教我 J-Cut 的做法：下一個畫面還沒出現前，先聽到下一段的聲音。說明適用情境，並在 Remotion 示範：聲音 <Audio> 提前 10 幀進入，畫面在原定位置切換。","Claude Code","聲音先行"),
 ("7-3","L-Cut","請教我 L-Cut：畫面已經切到下一段，但上一段的聲音還延續。適合訪談、旁白蓋 B-roll。請示範在 Remotion 讓音訊延後 12 幀結束。","Claude Code","聲音延續"),
 ("7-4","淡入淡出 Fade","請說明 Fade / Cross-dissolve 的適用情境（時間流逝、段落結束、情緒緩和），以及使用時的建議長度（8～20 幀）。並用 @remotion/transitions 的 fade() 示範。","Claude Code","淡化轉場"),
 ("7-5","滑動／推擠 Slide","請用 @remotion/transitions 的 slide() 示範「從右向左推入」，說明方向的意義：向左（前進、下一步）、向右（回顧、上一步）、向上（升級、提升）、向下（結束、沉澱）。","Claude Code","方向有意義的轉場"),
 ("7-6","Match Cut 匹配剪接","請說明匹配剪接：用相似的形狀、動作或構圖連接兩個畫面。給我 3 個適合短影音的點子（例如手機螢幕轉到電腦螢幕）。","ChatGPT / Claude","創意點子"),
 ("7-7","Jump Cut 跳剪","請說明跳剪與其風格：口播連續剪、去掉停頓，並提醒要搭配縮放變化，避免相同景別連續剪接顯得跳針。","ChatGPT / Claude","風格觀念"),
 ("7-8","轉場清單","請為這支【產品介紹】影片，依場景列出「建議轉場表」：場景｜轉場類型｜長度｜為什麼。最多使用 3 種轉場，其餘全部硬切。","ChatGPT / Claude","轉場表"),
 ])

# ───────────────────────── 第 8 章 光線、調色 ─────────────────────────
chapter("第 8 章　光線與調色",
 "調色順序：①先修正曝光與白平衡（讓畫面正確）→ ②再做風格（讓畫面好看）。所有素材要先統一，再加風格。",
 [
 ("8-1","診斷曝光","請根據我描述的畫面【臉偏暗、背景過亮】，判斷問題原因，並給我調整順序：曝光、陰影、高光、對比，各調多少方向（加或減）即可。","ChatGPT / Claude","調整建議"),
 ("8-2","白平衡","畫面偏黃／偏藍，請教我如何用「色溫」與「色調」修正，並以人臉膚色自然為準。不要過度修正。","ChatGPT / Claude","膚色自然"),
 ("8-3","統一多段素材","我有三段在不同時間拍的素材，光線不一致。請教我如何以其中一段為基準，統一亮度、色溫與對比。","ChatGPT / Claude","畫面一致"),
 ("8-4","Remotion 濾鏡","請在 Remotion 對影片加上 CSS filter：brightness(1.05) contrast(1.1) saturate(1.1)，並寫成可在檔案頂端調整的設定。","Claude Code","基本調色"),
 ("8-5","風格化","請建議 3 種短影音常用色調風格（清爽明亮、電影暖調、冷調科技），每種給關鍵參數方向與適用主題。","ChatGPT / Claude","風格選擇"),
 ("8-6","拍攝光線建議","請給我一份「口播拍攝光線檢查表」：主光位置、背景距離、避免逆光、窗光使用、手機設定。簡短條列。","ChatGPT / Claude","拍攝檢查表"),
 ("8-7","不能救的問題","請列出後製無法救回、一定要重拍的光線問題（例如過曝到死白、嚴重失焦），讓學員及早判斷。","ChatGPT / Claude","判斷標準"),
 ])

# ───────────────────────── 第 9 章 聲音 ─────────────────────────
chapter("第 9 章　聲音處理與配樂",
 "觀眾可以原諒畫質，不能原諒聲音。先把人聲處理乾淨，再談音樂與音效。",
 [
 ("9-1","降噪","請教我如何用 ffmpeg 的 afftdn 濾鏡降低背景雜音，給我指令與參數建議，並提醒過度降噪會讓聲音失真。","Claude Code","降噪指令"),
 ("9-2","音量標準化","請給我 ffmpeg loudnorm 的指令，把短影音音量標準化到 -14 LUFS，並說明 LUFS 是什麼。","Claude Code","音量一致"),
 ("9-3","自動壓低配樂","在 Remotion 做「人聲出現時，BGM 自動降到 15%；人聲停止時回到 40%」，請使用 words.json 的時間碼判斷人聲段落，過渡 10 幀。","Claude Code","Ducking"),
 ("9-4","音效使用","請列出短影音常用音效（嗖、叮、咚、打字聲）與使用時機，並提醒濫用的風險。","ChatGPT / Claude","音效守則"),
 ])

# ───────────────────────── 第 10 章 成品 ─────────────────────────
chapter("第 10 章　成品檢查、輸出與排錯",
 "",
 [
 ("10-1","成品檢查","請替我建立短影音發佈前檢查清單：前 3 秒 Hook、字幕錯字、音量、安全區、結尾 CTA、檔案規格。每項用勾選格式。","ChatGPT / Claude","發佈檢查"),
 ("10-2","各平台規格","請以表格整理 Instagram Reels、YouTube Shorts、TikTok、Facebook Reels 的建議尺寸、時長、檔案大小。請標註「以官方最新公告為準」。","ChatGPT / Claude","規格表"),
 ("10-3","渲染太慢","我的 Remotion 渲染很慢，請給我 5 個提速方法（降低 concurrency 或提高、用 OffthreadVideo、降解析度試轉、縮短預覽段落、檢查重運算）。","ChatGPT / Claude","提速建議"),
 ("10-4","畫面與聲音不同步","匯出的影片聲音比畫面慢／快，請列出可能原因與檢查順序（fps 不一致、可變幀率素材、音訊取樣率）。","Claude Code","排錯順序"),
 ("10-5","描述問題的模板","我遇到問題，請你當除錯夥伴。我會提供：①我想做什麼；②我做了什麼；③實際發生什麼；④錯誤訊息。請先問我缺少的資訊，再給解法。","ChatGPT / Claude","通用除錯"),
 ])

# ───────────────────────── 完整剪輯流程 ─────────────────────────
WORKFLOW = [
 ("1","拍攝","光線、收音、一次講完整句"),
 ("2","語音轉文字","第 3 章 3-1～3-3"),
 ("3","刪贅字、重複、NG","第 4 章 4-1～4-3，人工確認 4-7"),
 ("4","刪靜音、跳剪","4-4、4-6"),
 ("5","縮放與運鏡","第 6 章"),
 ("6","轉場與 B-roll","第 7 章、5-5"),
 ("7","字幕","3-4、3-5"),
 ("8","調色","第 8 章"),
 ("9","聲音與配樂","第 9 章"),
 ("10","檢查與輸出","第 10 章"),
]

e = html.escape
def row_html(r):
    n, scene, prompt, tool, out = r
    return (f"<tr><td class=n>{e(n)}</td><td class=s>{e(scene)}</td>"
            f"<td class=p>{e(prompt).replace(chr(10),'<br>')}</td>"
            f"<td class=t>{e(tool)}</td><td class=o>{e(out)}</td></tr>")

parts = []
total = 0
for title, intro, rows, tip in CH:
    total += len(rows)
    parts.append(f"<section><h2>{e(title)}</h2>")
    if intro: parts.append(f"<p class=intro>{e(intro)}</p>")
    parts.append("<table><thead><tr><th>編號</th><th>情境</th><th>提示詞（直接複製）</th><th>工具</th><th>預期結果</th></tr></thead><tbody>")
    parts += [row_html(r) for r in rows]
    parts.append("</tbody></table></section>")

toc = "".join(f"<li>{e(t)}</li>" for t,_,_,_ in CH)
wf = "".join(f"<tr><td class=n>{a}</td><td>{e(b)}</td><td>{e(c)}</td></tr>" for a,b,c in WORKFLOW)

doc = f"""<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><title>AI 剪輯課提示詞講義</title>
<style>
@page {{ size: A4; margin: 16mm 14mm; }}
body {{ font-family: "Noto Sans CJK TC","Noto Sans TC","WenQuanYi Zen Hei","PingFang TC",sans-serif; color:#1b1f24; font-size:10.5pt; line-height:1.6; }}
.cover {{ height: 255mm; display:flex; flex-direction:column; justify-content:center; page-break-after:always; }}
.cover h1 {{ font-size:34pt; margin:0 0 8mm; line-height:1.25; }}
.cover .sub {{ font-size:14pt; color:#475569; }}
.cover .meta {{ margin-top:14mm; font-size:11pt; color:#64748b; }}
h2 {{ font-size:17pt; border-left:5px solid #2563eb; padding-left:8px; margin:0 0 4mm; page-break-after:avoid; }}
section {{ margin-bottom:10mm; }}
.intro {{ background:#eff6ff; padding:6px 10px; border-radius:4px; margin:0 0 4mm; }}
table {{ width:100%; border-collapse:collapse; font-size:9pt; }}
th {{ background:#1e3a8a; color:#fff; padding:5px; text-align:left; }}
td {{ border:1px solid #cbd5e1; padding:5px; vertical-align:top; }}
tr {{ page-break-inside:avoid; }}
td.n {{ width:11mm; font-weight:700; color:#1e3a8a; white-space:nowrap; }}
td.s {{ width:22mm; font-weight:600; }}
td.p {{ background:#f8fafc; font-family:"Noto Sans CJK TC","WenQuanYi Zen Hei",monospace; }}
td.t {{ width:20mm; }}
td.o {{ width:22mm; }}
.pb {{ page-break-before:always; }}
.note {{ border:1px solid #f59e0b; background:#fffbeb; padding:8px 12px; border-radius:4px; margin:4mm 0; }}
ol li {{ margin:2px 0; }}
</style></head><body>
<div class="cover"><h1>AI 剪輯課<br>提示詞講義</h1>
<div class="sub">ChatCut × Remotion × Node.js</div>
<div class="sub">共 {total} 組可直接複製的提示詞</div>
<div class="meta">國立臺北科技大學 推廣教育　｜　講師：亞瑟教練</div></div>

<section><h2>使用說明</h2>
<ol>
<li><b>【】括號</b>內是要你換成自己內容的地方。</li>
<li>「工具」欄標示最適合的使用對象：<b>ChatGPT / Claude</b> 用於問答與整理；<b>Claude Code</b> 用於直接改專案程式；<b>ChatCut</b> 直接貼在剪輯對話框。</li>
<li>先請 AI 列出「建議清單」，確認後再執行，避免誤刪內容。</li>
<li>每次只做一件事，做完看結果，再下下一個指令。</li>
<li>遇到錯誤，把完整錯誤訊息貼回去，使用 10-5 的模板。</li>
</ol>
<div class="note">版本與官方規格（Node.js、Remotion、各平台影片規格、授權）會更新，請以官方文件為準。</div>
<h3>完整剪輯流程對照</h3>
<table><thead><tr><th>步驟</th><th>工作</th><th>對應提示詞</th></tr></thead><tbody>{wf}</tbody></table>
<h3>目錄</h3><ol>{toc}</ol></section>
<div class="pb"></div>
{''.join(parts)}
</body></html>"""

out = pathlib.Path(sys.argv[1]); out.write_text(doc, encoding="utf-8")
print("rows:", total, "->", out)
