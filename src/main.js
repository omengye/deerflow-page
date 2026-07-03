// Main JS entry point for DeerFlow landing page
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Navigation Scroll Spy & Smooth Active Link State
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  function scrollSpy() {
    let currentSectionId = '';
    const scrollPos = window.scrollY + 100; // offset for nav height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', scrollSpy);
  scrollSpy(); // Run initially to highlight current section

  // 3. i18n Translation Dictionary (English, Chinese, Japanese)
  const translations = {
    en: {
      "seo-title": "DeerFlow-Api | Multi-Client Autonomous AI Agent Workflow Ecosystem",
      "nav-home": "Home",
      "nav-ecosystem": "Components",
      "nav-sandbox": "Sync Demo",
      "nav-architecture": "Architecture",
      "hero-badge-text": "Based on ByteDance deerflow",
      "hero-title": "DeerFlow-Api <br /><span class=\"gradient-text\">Multi-Client AI Agent</span> <br />Workflow Ecosystem",
      "hero-subtitle": "Based on AG-UI protocol, connecting FastAPI backend, Go+Bubble Tea terminal console, and Kotlin+Compose mobile app. Experience low-latency real-time streams over SSE for a seamless workflow execution.",
      "hero-btn-start": "Sync Demo",
      "hero-btn-arch": "Architecture",
      "hero-visual-api": "State Engine & Tools",
      "hero-visual-tui": "Command Line Terminal",
      "hero-visual-app": "Android Mobile",
      "eco-title": "Core Ecosystem Components",
      "eco-subtitle": "Connecting backend services, command-line interfaces, and mobile clients for full-scenario agent execution.",
      "eco-api-tag": "Core Backend",
      "eco-api-desc": "High-performance backend service built on FastAPI and DeerFlow harness, exposing capabilities as REST and SSE API. Supports external ACP agent integration and WSL2 sandboxing for safe isolation.",
      "eco-api-feat-1": "<i data-lucide=\"check\"></i> <span>Expose standard REST endpoints and SSE (Server-Sent Events) live streams</span>",
      "eco-api-feat-2": "<i data-lucide=\"check\"></i> <span>Support external ACP agents (e.g. Codex or Claude Code) via Agent Client Protocol</span>",
      "eco-api-feat-3": "<i data-lucide=\"check\"></i> <span>Built-in LocalWslProvider (WSL2 sandbox) for Windows compatibility and VM-level isolation</span>",
      "eco-tui-tag": "Terminal UI",
      "eco-tui-desc": "A native terminal user interface client built using Go and Bubble Tea. Connected via AG-UI protocol, it delivers highly responsive real-time streaming events and keyboard-centric interaction.",
      "eco-tui-feat-1": "<i data-lucide=\"check\"></i> <span>Stream rendering of text, reasoning/thinking paths, and full tool execution lifecycles</span>",
      "eco-tui-feat-2": "<i data-lucide=\"check\"></i> <span>Quick commands: create thread (/new), cancel run (/cancel), and exit</span>",
      "eco-tui-feat-3": "<i data-lucide=\"check\"></i> <span>Auto-adaptive terminal width, smart wrapping, and Ctrl+C clipboard copy support</span>",
      "eco-app-tag": "Mobile App",
      "eco-app-desc": "Native Android client built with Kotlin and Jetpack Compose. Re-implementing the state machine reducer, it offers thread history database, markdown rendering, and background SSE stream keep-alive.",
      "eco-app-feat-1": "<i data-lucide=\"check\"></i> <span>Select local documents or capture photos directly via camera, auto-mapping to virtual workspace</span>",
      "eco-app-feat-2": "<i data-lucide=\"check\"></i> <span>Integrated SseForegroundService to prevent Android process limits and keep stream syncing active</span>",
      "eco-app-feat-3": "<i data-lucide=\"check\"></i> <span>Full Markdown rendering support including headers, lists, code blocks, and tables</span>",
      "sim-title": "Multi-Client Coordinated Demo",
      "sim-subtitle": "Simulate TUI console, Android App, and API server running workflows and syncing status in real-time under different business scenarios.",
      "sim-panel-title": "Workflow Control Panel",
      "sim-panel-desc": "Choose a typical AI Agent workflow below to observe the coordinated streaming responses between TUI and mobile clients.",
      "sim-wf-trans-title": "Translation Agent",
      "sim-wf-trans-sub": "Multi-engine invocation & polishing",
      "sim-wf-code-title": "Code Audit & Refactoring",
      "sim-wf-code-sub": "Static AST analysis & LLM patching",
      "sim-wf-search-title": "Hotspot Aggregator Agent",
      "sim-wf-search-sub": "Scraping, cleaning, & multi-source summary",
      "sim-indicator-text": "Coordinated demo auto-playing...",
      "sim-status-label": "Status:",
      "phone-app-status": "API Connected",
      "phone-input-placeholder": "Enter workflow prompt...",
      "arch-title": "System Architecture & Data Flow",
      "arch-subtitle": "A clear, transparent layout of the multi-client network topology, making every agent step traceable.",
      "arch-info-title": "Data Pipeline Architecture",
      "arch-info-subtitle": "The design of DeerFlow-Api architecture centers on real-time stream delivery and centralized state persistence:",
      "arch-feat-1-title": "Standard AG-UI Stream Delivery",
      "arch-feat-1-desc": "TUI and Android App communicate with deerflow-api using the standard AG-UI protocol. Streaming events (text, reasoning, tool states) are pushed instantly via HTTP/SSE, guaranteeing a zero-latency interactive feel.",
      "arch-feat-2-title": "DeerFlow-Api Harness Orchestration",
      "arch-feat-2-desc": "The backend encapsulates the Agent harness capability, creating a flexible execution context. Enabled with plan_mode by default, it tracks task steps and manages concurrent sub-agents efficiently.",
      "arch-feat-3-title": "SQLite Persistence & Thread Sharing",
      "arch-feat-3-desc": "All session history and checkpoint states are saved in SQLite. Threads endpoints allow clients to fetch historic conversations, so you can start a task on TUI and seamlessly continue it on your phone.",
      "footer-license": "Released under the MIT License."
    },
    zh: {
      "seo-title": "DeerFlow-Api | 多端协同的自主 AI Agent 工作流生态",
      "nav-home": "首页",
      "nav-ecosystem": "核心生态组件",
      "nav-sandbox": "多端协同演示",
      "nav-architecture": "系统架构",
      "hero-badge-text": "基于字节跳动开源 deerflow",
      "hero-title": "DeerFlow-Api <br /><span class=\"gradient-text\">多端协同 AI Agent</span> <br />工作流生态",
      "hero-subtitle": "基于 AG-UI 协议，打通 FastAPI 服务端、Go+Bubble Tea 命令行终端与 Kotlin+Compose 移动端。通过 HTTP/SSE 协议实时输出智能体思考与工具调用日志，打造高效的自主工作流体验。",
      "hero-btn-start": "协同演示",
      "hero-btn-arch": "查看架构",
      "hero-visual-api": "状态引擎 & 工具集",
      "hero-visual-tui": "命令行控制终端",
      "hero-visual-app": "Android 移动端",
      "eco-title": "核心生态组件",
      "eco-subtitle": "打通服务端、命令行终端及移动设备客户端，提供全场景协同覆盖。",
      "eco-api-tag": "核心后端",
      "eco-api-desc": "基于 FastAPI 与 DeerFlow harness 构建的后端服务，将智能体能力暴露为标准 REST 和 SSE API。支持外部 ACP 智能体对接与 Windows/WSL2 安全隔离沙箱。",
      "eco-api-feat-1": "<i data-lucide=\"check\"></i> <span>暴露标准的 REST 接口与 SSE (Server-Sent Events) 实时流</span>",
      "eco-api-feat-2": "<i data-lucide=\"check\"></i> <span>支持通过 Agent Client Protocol (ACP) 对接外部智能体 (如 Codex/Claude Code)</span>",
      "eco-api-feat-3": "<i data-lucide=\"check\"></i> <span>内置 LocalWslProvider (WSL2 沙箱)，实现 Windows 主机上的安全隔离与 Bash 语义兼容</span>",
      "eco-tui-tag": "命令行终端",
      "eco-tui-desc": "基于 Go + Bubble Tea 构建的终端客户端。通过 AG-UI 协议实现 HTTP/SSE 流式接入，支持实时解析并渲染文本消息、推理路径及工具执行。",
      "eco-tui-feat-1": "<i data-lucide=\"check\"></i> <span>支持文本、REASONING、THINKING 及工具调用全生命周期解析</span>",
      "eco-tui-feat-2": "<i data-lucide=\"check\"></i> <span>提供快捷命令支持：新建线程 ( /new )、取消执行 ( /cancel )、退出等</span>",
      "eco-tui-feat-3": "<i data-lucide=\"check\"></i> <span>自带终端自适应与换行排版，支持 Ctrl+C 复制消息内容</span>",
      "eco-app-tag": "移动端",
      "eco-app-desc": "基于 Kotlin + Jetpack Compose 开发的原生 Android 客户端。移植了 Bubble Tea 状态机逻辑，支持本地线程历史持久化、富文本渲染以及前台保活后台持续流式接收。",
      "eco-app-feat-1": "<i data-lucide=\"check\"></i> <span>支持本地文件与相机图片附件上传，自动映射智能体虚拟工作区</span>",
      "eco-app-feat-2": "<i data-lucide=\"check\"></i> <span>集成前台保活服务 (SseForegroundService) 保证后台运行不中断</span>",
      "eco-app-feat-3": "<i data-lucide=\"check\"></i> <span>内置支持 Markdown 富文本渲染，包括标题、列表、加粗、等宽代码块及表格渲染</span>",
      "sim-title": "多端协同演示",
      "sim-subtitle": "模拟在不同业务场景下，TUI 终端、移动端与 API 服务端协同运行工作流的实时同步过程。",
      "sim-panel-title": "工作流模拟面板",
      "sim-panel-desc": "选择下方一个典型的 AI Agent 工作流，观察 TUI 终端和手机 App 的联动响应与状态流转。",
      "sim-wf-trans-title": "跨语言翻译 Agent",
      "sim-wf-trans-sub": "多引擎调用与智能纠错",
      "sim-wf-code-title": "代码审查 & 提炼",
      "sim-wf-code-sub": "解析本地文件并执行重构",
      "sim-wf-search-title": "全网热点聚合 Agent",
      "sim-wf-search-sub": "多源抓取、清洗与摘要生成",
      "sim-indicator-text": "协同演示自动播放中...",
      "sim-status-label": "状态：",
      "phone-app-status": "API 已连接",
      "phone-input-placeholder": "输入工作流指令...",
      "arch-title": "系统架构与数据流向",
      "arch-subtitle": "清晰透明的多端协同拓扑架构，让您对智能体的每一步运作了如指掌。",
      "arch-info-title": "生态数据流向",
      "arch-info-subtitle": "DeerFlow-Api 架构的设计核心在于 “基于 AG-UI 协议的流式通信与状态持久化”：",
      "arch-feat-1-title": "标准 AG-UI 协议流式传输",
      "arch-feat-1-desc": "<code>deerflow-tui</code> 和 <code>deerflow-app</code> 均基于标准的 AG-UI 协议与 <code>deerflow-api</code> 交互。通过 HTTP/SSE 协议接收流式事件（包含文本消息、推理思考和工具执行状态），提供极佳的实时渲染响应。",
      "arch-feat-2-title": "基于 DeerFlow-Api Harness 编排架构",
      "arch-feat-2-desc": "后端服务封装了 Agent harness 能力，提供可灵活编排与控制的智能体执行上下文。默认启用计划模式（plan_mode）进行工作流步骤追踪，并支持主智能体分派并发子智能体执行。",
      "arch-feat-3-title": "本地状态与多端线程共享",
      "arch-feat-3-desc": "所有会话数据通过 SQLite 在 API 服务端进行持久化，暴露标准的 Threads 会话线程端点。客户端（TUI 与 Android App）通过快照与历史加载，确保用户可以在不同终端之间无缝切换并继续智能体的会话线程。",
      "footer-license": "基于 MIT 协议开源。"
    },
    ja: {
      "seo-title": "DeerFlow-Api | マルチクライアント自律型 AI Agent ワークフローエコシステム",
      "nav-home": "ホーム",
      "nav-ecosystem": "コアコンポーネント",
      "nav-sandbox": "デモ",
      "nav-architecture": "アーキテクチャ",
      "hero-badge-text": "ByteDanceのdeerflowをベースに構築",
      "hero-title": "DeerFlow-Api <br /><span class=\"gradient-text\">マルチクライアント AI Agent</span> <br />ワークフローエコシステム",
      "hero-subtitle": "AG-UIプロトコルに基づいて構築され、FastAPIバックエンド、Go+Bubble Teaターミナルコンソール、およびKotlin+Composeモバイルアプリを接続。HTTP/SSEを介してリアルタイムなストリーミングイベントを提供します。",
      "hero-btn-start": "デモを見る",
      "hero-btn-arch": "アーキテクチャ",
      "hero-visual-api": "状態エンジン & ツール",
      "hero-visual-tui": "ターミナルクライアント",
      "hero-visual-app": "Androidモバイル",
      "eco-title": "コアエコシステムコンポーネント",
      "eco-subtitle": "バックエンドサービス、コマンドライン、およびモバイルデバイスを接続し、あらゆるシナリオでのAgent実行に対応します。",
      "eco-api-tag": "APIバックエンド",
      "eco-api-desc": "FastAPIとDeerFlow harnessで構築された高性能バックエンド。Agentのメモリ状態、ワークフロー実行コンテキスト、ツールレジストリを管理し、LLMオーケストレーターとして機能します。Windows向けに安全なWSL2隔離サンドボックスを提供。",
      "eco-api-feat-1": "<i data-lucide=\"check\"></i> <span>標準REST APIおよびSSE（Server-Sent Events）リアルタイムストリームの提供</span>",
      "eco-api-feat-2": "<i data-lucide=\"check\"></i> <span>ACP（Agent Client Protocol）を介した外部Agent（CodexやClaude Codeなど）の連携対応</span>",
      "eco-api-feat-3": "<i data-lucide=\"check\"></i> <span>LocalWslProvider（WSL2サンドボックス）によるWindows上での安全な隔離とBash環境互換性の確保</span>",
      "eco-tui-tag": "ターミナルUI",
      "eco-tui-desc": "GoとBubble Teaを使用して構築されたネイティブTUIクライアント。AG-UIプロトコルにより接続され、応答性の高いリアルタイムなストリーミングイベントとキーボード中心のインタラクションを提供します。",
      "eco-tui-feat-1": "<i data-lucide=\"check\"></i> <span>テキスト、推論（REASONING/THINKING）、およびツール実行の全ライフサイクルをストリーム表示</span>",
      "eco-tui-feat-2": "<i data-lucide=\"check\"></i> <span>新規スレッド作成（ /new ）、実行キャンセル（ /cancel ）、終了などのショートカットコマンド</span>",
      "eco-tui-feat-3": "<i data-lucide=\"check\"></i> <span>ターミナル幅の自動適応、スマートな折り返し、およびCtrl+Cクリップボードコピーのサポート</span>",
      "eco-app-tag": "モバイルアプリ",
      "eco-app-desc": "KotlinとJetpack Composeで開発されたネイティブAndroidクライアント。Bubble Tea状態マシンロジックを移植し、スレッド履歴の保存、Markdownレンダリング、バックグラウンドSSE接続維持に対応。",
      "eco-app-feat-1": "<i data-lucide=\"check\"></i> <span>ローカルドキュメントやカメラ写真のアップロードに対応し、Agentの仮想ワークスペースに自動マッピング</span>",
      "eco-app-feat-2": "<i data-lucide=\"check\"></i> <span>SseForegroundServiceフォアグラウンドサービスを統合し、アプリがバックグラウンドでも同期を維持</span>",
      "eco-app-feat-3": "<i data-lucide=\"check\"></i> <span>Markdownレンダラーを搭載し、見出し、リスト、太字、等幅コードブロック、テーブルを美しく表示</span>",
      "sim-title": "マルチクライアント協調デモ",
      "sim-subtitle": "TUIコンソール、Androidアプリ、およびAPIサーバーが、異なるビジネスシナリオで協調してワークフローを実行し、リアルタイムに状態を同期する様子をシミュレートします。",
      "sim-panel-title": "シミュレータ操作パネル",
      "sim-panel-desc": "以下のAI Agentワークフローを選択し、TUIターミナルとモバイルアプリ間の流れるようなリアルタイム連携を確認します。",
      "sim-wf-trans-title": "翻訳エージェント",
      "sim-wf-trans-sub": "複数エンジン呼び出しとインテリジェント推敲",
      "sim-wf-code-title": "コード監査とリファクタリング",
      "sim-wf-code-sub": "ローカルファイルの解析と自動修正の適用",
      "sim-wf-search-title": "ホットトピック収集エージェント",
      "sim-wf-search-sub": "複数ソースからの収集、フィルタリング、および要約生成",
      "sim-indicator-text": "デモ自動再生中...",
      "sim-status-label": "ステータス：",
      "phone-app-status": "API接続完了",
      "phone-input-placeholder": "ワークフローコマンドを入力...",
      "arch-title": "システムアーキテクチャ & 数据流",
      "arch-subtitle": "透過的で明確なマルチクライアントネットワークトポロジ。エージェントのすべての処理ステップを可視化します。",
      "arch-info-title": "データフロー構造",
      "arch-info-subtitle": "DeerFlow-Apiアーキテクチャの核心は「AG-UIプロトコルによるストリーミング通信と状態の永続化」です。",
      "arch-feat-1-title": "標準AG-UIプロトコル配信",
      "arch-feat-1-desc": "<code>deerflow-tui</code>と<code>deerflow-app</code>は、標準のAG-UIプロトコルを介して<code>deerflow-api</code>と接続。HTTP/SSEによるイベント配信（テキスト、思考、ツール状態）により即時フィードバックを提供します。",
      "arch-feat-2-title": "DeerFlow-Api Harnessオーケストレーション",
      "arch-feat-2-desc": "バックエンドはAgent harness機能をカプセル化。デフォルトでplan_modeによる手順管理に対応し、並行した子エージェントタスクの割り当てを管理します。",
      "arch-feat-3-title": "SQLite永続化とスレッド共有",
      "arch-feat-3-desc": "すべての会話データはSQLiteを介してサーバー側で永続化され、標準のThreadsエンドポイントを提供します。ターミナルとモバイル間での進捗共有と接続維持が可能です。",
      "footer-license": "MITライセンスのもとで公開。"
    }
  };

  // Language management state
  let currentLang = localStorage.getItem('df-lang') || 'en';

  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = currentLang;
  }

  function updatePageLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('df-lang', lang);

    if (langSelect) {
      langSelect.value = lang;
    }

    // Translate standard text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === 'TITLE') {
          document.title = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Translate HTML blocks
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Re-create icons inside translated HTML blocks
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    // Refresh layout-level nodes in SVG Diagram
    const svgNodeTui = document.getElementById('svg-node-tui');
    const svgNodeApp = document.getElementById('svg-node-app');
    const svgNodeLlm = document.getElementById('svg-node-llm');
    const svgNodeLlmSub = document.getElementById('svg-node-llm-sub');
    const svgNodeTools = document.getElementById('svg-node-tools');
    const svgNodeToolsSub = document.getElementById('svg-node-tools-sub');

    if (lang === 'zh') {
      if (svgNodeTui) svgNodeTui.textContent = 'TUI 命令行终端';
      if (svgNodeApp) svgNodeApp.textContent = 'Android 客户端';
      if (svgNodeLlm) svgNodeLlm.textContent = 'LLM 驱动器';
      if (svgNodeLlmSub) svgNodeLlmSub.textContent = '大语言模型接口';
      if (svgNodeTools) svgNodeTools.textContent = '本地/云端工具集';
      if (svgNodeToolsSub) svgNodeToolsSub.textContent = 'Shell / 翻译 / 搜索';
    } else if (lang === 'ja') {
      if (svgNodeTui) svgNodeTui.textContent = 'TUI ターミナル';
      if (svgNodeApp) svgNodeApp.textContent = 'Android クライアント';
      if (svgNodeLlm) svgNodeLlm.textContent = 'LLM 駆動器';
      if (svgNodeLlmSub) svgNodeLlmSub.textContent = '大言語モデル接続';
      if (svgNodeTools) svgNodeTools.textContent = 'ローカル/クラウドツール';
      if (svgNodeToolsSub) svgNodeToolsSub.textContent = 'シェル / 翻訳 / 検索';
    } else {
      if (svgNodeTui) svgNodeTui.textContent = 'TUI Terminal';
      if (svgNodeApp) svgNodeApp.textContent = 'Android Client';
      if (svgNodeLlm) svgNodeLlm.textContent = 'LLM Provider';
      if (svgNodeLlmSub) svgNodeLlmSub.textContent = 'API Connector';
      if (svgNodeTools) svgNodeTools.textContent = 'Local & Cloud Tools';
      if (svgNodeToolsSub) svgNodeToolsSub.textContent = 'Shell / Translate / Search';
    }
  }

  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      currentLang = e.target.value;
      updatePageLanguage(currentLang);
      resetSimulatorView();
    });
  }

  // 4. Interactive Simulator Workflows Config (Separated by Language)
  const workflows = {
    translate: {
      en: {
        tuiTitle: 'deerflow-tui (translate_agent.py)',
        inputPlaceholder: 'Enter translation prompt...',
        tuiInitialPrompt: 'omengye@AGENT-TUI:~$ deerflow run translate_agent -i "How\'s the weather today?"',
        appSentText: 'Run workflow translate_agent, input: "How\'s the weather today?"',
        appThinkingText: 'Agent is executing workspace task...',
        steps: [
          { type: 'log', text: '[17:02:15] [API] Successfully established AG-UI HTTP/SSE live stream channel...', delay: 600 },
          { type: 'log', text: '[17:02:15] [API] Loading translate_agent workflow, starting workspace...', delay: 600 },
          { type: 'progress', text: '✔ Parsing input text: "How\'s the weather today?"', delay: 700 },
          { type: 'thinking', text: 'ℹ [Thinking] Translation target not specified, defaulting English to Chinese. Invoking LLM to analyze semantics and convert it into modern idiomatic Chinese.', delay: 1000 },
          { type: 'progress', text: '▶ Calling LLM for draft translation...', delay: 600 },
          { type: 'log', text: '  ↳ Prompt: Translate to Chinese: "How\'s the weather today?"', delay: 400 },
          { type: 'progress', text: '✔ LLM Response (Draft): "今天天气怎么样？"', delay: 800 },
          { type: 'thinking', text: 'ℹ [Thinking] Draft translation is accurate. Invoking local tool custom_polisher to polish it into natural spoken Chinese.', delay: 900 },
          { type: 'progress', text: '▶ Calling local tool: custom_polisher (args: "今天天气怎么样？")', delay: 600 },
          { type: 'progress', text: '✔ Tool returned: "今天天气咋样？ / 今天天气好吗？"', delay: 800 },
          { type: 'output', text: '=== Translation Result (Polished) ===\n今天天气怎么样？ (Standard)\n今天天气咋样？ (Colloquial)', delay: 1000 }
        ],
        resultHtml: `
          <div class="bubble-title-icon"><i data-lucide="check-circle-2"></i> <span>Workflow Completed</span></div>
          <div class="bubble-content-box">
            <p><strong>Result:</strong></p>
            <p>今天天气怎么样？ (Standard)<br />今天天气咋样？ (Colloquial)</p>
          </div>
          <span class="bubble-meta">17:02</span>
        `,
        statusLabels: { preparing: 'Preparing', active: 'Running', done: 'Completed' }
      },
      zh: {
        tuiTitle: 'deerflow-tui (translate_agent.py)',
        inputPlaceholder: '输入翻译文本 (如 "今天天气怎么样？")...',
        tuiInitialPrompt: 'omengye@AGENT-TUI:~$ deerflow run translate_agent -i "今天天气怎么样？"',
        appSentText: '运行工作流 translate_agent，输入："今天天气怎么样？"',
        appThinkingText: 'Agent 正在执行工作空间任务...',
        steps: [
          { type: 'log', text: '[17:02:15] [API] 成功建立 AG-UI HTTP/SSE 实时流通道...', delay: 600 },
          { type: 'log', text: '[17:02:15] [API] 加载工作流 translate_agent，启动工作空间...', delay: 600 },
          { type: 'progress', text: '✔ 正在解析输入文本: "今天天气怎么样？"', delay: 700 },
          { type: 'thinking', text: 'ℹ [Thinking] 翻译目标未指定，默认将英语翻译为中文。需要调用 LLM 识别语义并转换为地道的中文口语表达。', delay: 1000 },
          { type: 'progress', text: '▶ 正在调用 LLM 进行初版翻译...', delay: 600 },
          { type: 'log', text: '  ↳ Prompt: Translate to Chinese: "How\'s the weather today?"', delay: 400 },
          { type: 'progress', text: '✔ LLM 响应 (初译): "今天天气怎么样？"', delay: 800 },
          { type: 'thinking', text: 'ℹ [Thinking] 初版翻译准确。执行润色工具，转换为更自然接地气的现代口语表达。', delay: 900 },
          { type: 'progress', text: '▶ 正在调用本地工具: custom_polisher (参数: "今天天气怎么样？")', delay: 600 },
          { type: 'progress', text: '✔ 工具返回: "今天天气咋样？ / 今天天气好吗？"', delay: 800 },
          { type: 'output', text: '=== 翻译结果 (Polished) ===\n今天天气怎么样？ (标准)\n今天天气咋样？ (地道口语)', delay: 1000 }
        ],
        resultHtml: `
          <div class="bubble-title-icon"><i data-lucide="check-circle-2"></i> <span>工作流运行成功</span></div>
          <div class="bubble-content-box">
            <p><strong>结果:</strong></p>
            <p>今天天气怎么样？ (标准)<br />今天天气咋样？ (地道口语)</p>
          </div>
          <span class="bubble-meta">17:02</span>
        `,
        statusLabels: { preparing: '准备中', active: '运行中', done: '已完成' }
      },
      ja: {
        tuiTitle: 'deerflow-tui (translate_agent.py)',
        inputPlaceholder: '翻訳するテキストを入力してください...',
        tuiInitialPrompt: 'omengye@AGENT-TUI:~$ deerflow run translate_agent -i "How\'s the weather today?"',
        appSentText: 'ワークフロー translate_agent を実行、入力: "How\'s the weather today?"',
        appThinkingText: 'Agentがワークスペースタスクを実行中...',
        steps: [
          { type: 'log', text: '[17:02:15] [API] AG-UI HTTP/SSE リアルタイムストリームチャネルの確立に成功しました...', delay: 600 },
          { type: 'log', text: '[17:02:15] [API] translate_agent ワークフローをロードし、ワークスペースを開始します...', delay: 600 },
          { type: 'progress', text: '✔ 入力テキストを解析中: "How\'s the weather today?"', delay: 700 },
          { type: 'thinking', text: 'ℹ [Thinking] 翻訳先が指定されていません。デフォルトで英語から中国語へ翻訳します。LLMを呼び出し、文脈を認識して自然な口語表現に変換します。', delay: 1000 },
          { type: 'progress', text: '▶ 一次翻訳のためLLMを呼び出し中...', delay: 600 },
          { type: 'log', text: '  ↳ Prompt: Translate to Chinese: "How\'s the weather today?"', delay: 400 },
          { type: 'progress', text: '✔ LLMレスポンス（翻訳草案）: "今天天气怎么样？"', delay: 800 },
          { type: 'thinking', text: 'ℹ [Thinking] 翻訳草案は正確です。ローカルツール custom_polisher を呼び出して、より地元の口語表現に推敲します。', delay: 900 },
          { type: 'progress', text: '▶ ローカルツールを呼び出し中: custom_polisher (引数: "今天天气怎么样？")', delay: 600 },
          { type: 'progress', text: '✔ ツール実行結果: "今天天气咋样？ / 今天天气好吗？"', delay: 800 },
          { type: 'output', text: '=== 翻訳結果 (Polished) ===\n今天天气怎么样？ (標準)\n今天天气咋样？ (口語)', delay: 1000 }
        ],
        resultHtml: `
          <div class="bubble-title-icon"><i data-lucide="check-circle-2"></i> <span>ワークフローの実行成功</span></div>
          <div class="bubble-content-box">
            <p><strong>結果:</strong></p>
            <p>今天天气怎么样？ (標準)<br />今天天气咋样？ (口語表現)</p>
          </div>
          <span class="bubble-meta">17:02</span>
        `,
        statusLabels: { preparing: '準備中', active: '実行中', done: '完了' }
      }
    },
    coding: {
      en: {
        tuiTitle: 'deerflow-tui (code_audit.py)',
        inputPlaceholder: 'Enter code audit target...',
        tuiInitialPrompt: 'omengye@AGENT-TUI:~$ deerflow run code_audit -f "./src/db.js"',
        appSentText: 'Run workflow code_audit, auditing database config file "./src/db.js"',
        appThinkingText: 'Agent is analyzing code AST and generating patches...',
        steps: [
          { type: 'log', text: '[17:03:01] [API] Successfully established AG-UI HTTP/SSE live stream channel...', delay: 500 },
          { type: 'log', text: '[17:03:01] [API] Loading code_audit workflow, reading file "./src/db.js"...', delay: 600 },
          { type: 'progress', text: '✔ File loaded successfully, size: 2.4 KB, 78 lines.', delay: 700 },
          { type: 'thinking', text: 'ℹ [Thinking] Analyzing database connection pool config. Focus checks: 1. Idle connection leaks; 2. Unhandled errors crashing process.', delay: 1200 },
          { type: 'progress', text: '▶ Launching ESLint & AST parser...', delay: 700 },
          { type: 'progress', text: '✔ Static scan completed. Found 1 potential connection leak at line 42 (connect() not released in try-finally).', delay: 900 },
          { type: 'thinking', text: 'ℹ [Thinking] Generate refactoring scheme to patch leak, and invoke LLM to extract performance optimizations.', delay: 1000 },
          { type: 'progress', text: '▶ Calling LLM to generate refactoring recommendation...', delay: 800 },
          { type: 'progress', text: '✔ LLM Response: Refactoring patch generated successfully.', delay: 700 },
          { type: 'output', text: '=== Audit & Refactor Report ===\n[File] ./src/db.js\n[Status] Fixed (1 leak resolved)\n[Details] Optimized client.release() path, added debounced error recovery.', delay: 1000 }
        ],
        resultHtml: `
          <div class="bubble-title-icon"><i data-lucide="check-circle-2"></i> <span>Audit Completed</span></div>
          <div class="bubble-content-box">
            <p><strong>Report:</strong></p>
            <p>Autorefactored client closing logic to prevent connection handle leaks under high load.</p>
          </div>
          <span class="bubble-meta">17:03</span>
        `,
        statusLabels: { preparing: 'Preparing', active: 'Running', done: 'Completed' }
      },
      zh: {
        tuiTitle: 'deerflow-tui (code_audit.py)',
        inputPlaceholder: '输入代码审查目标 (如 "./src/db.js")...',
        tuiInitialPrompt: 'omengye@AGENT-TUI:~$ deerflow run code_audit -f "./src/db.js"',
        appSentText: '运行工作流 code_audit，审计数据库配置文件 "./src/db.js"',
        appThinkingText: 'Agent 正在分析代码 AST 并生成修复方案...',
        steps: [
          { type: 'log', text: '[17:03:01] [API] 成功建立 AG-UI HTTP/SSE 实时流通道...', delay: 500 },
          { type: 'log', text: '[17:03:01] [API] 加载工作流 code_audit，读取目标文件 "./src/db.js"...', delay: 600 },
          { type: 'progress', text: '✔ 成功加载文件，大小: 2.4 KB，共 78 行。', delay: 700 },
          { type: 'thinking', text: 'ℹ [Thinking] 需要对数据库连接池配置进行静态分析。重点排查：1. 闲置连接泄漏；2. 错误未捕获导致进程崩溃。', delay: 1200 },
          { type: 'progress', text: '▶ 启动 ESLint 及语法抽象树(AST) 分析工具...', delay: 700 },
          { type: 'progress', text: '✔ 静态扫描完成。发现 1 处潜在连接池泄露风险，第 42 行 connect() 未在 try-finally 块中释放。', delay: 900 },
          { type: 'thinking', text: 'ℹ [Thinking] 生成重构方案，修复泄露，并调用 LLM 提炼关键性能改进。', delay: 1000 },
          { type: 'progress', text: '▶ 正在调用 LLM 生成重构建议...', delay: 800 },
          { type: 'progress', text: '✔ LLM 响应: 重构方案已就绪，已生成 patch 文件。', delay: 700 },
          { type: 'output', text: '=== 审计与重构报告 ===\n[File] ./src/db.js\n[Status] Fixed (1 leak resolved)\n[Details] 优化了 client.release() 释放路径，增加了防抖容错机制。', delay: 1000 }
        ],
        resultHtml: `
          <div class="bubble-title-icon"><i data-lucide="check-circle-2"></i> <span>代码审计成功</span></div>
          <div class="bubble-content-box">
            <p><strong>审计报告:</strong></p>
            <p>已自动重构连接关闭逻辑，防止高并发下潜在句柄泄漏。</p>
          </div>
          <span class="bubble-meta">17:03</span>
        `,
        statusLabels: { preparing: '准备中', active: '运行中', done: '已完成' }
      },
      ja: {
        tuiTitle: 'deerflow-tui (code_audit.py)',
        inputPlaceholder: 'コード監査対象ファイルを入力...',
        tuiInitialPrompt: 'omengye@AGENT-TUI:~$ deerflow run code_audit -f "./src/db.js"',
        appSentText: 'ワークフロー code_audit を実行、データベース設定 "./src/db.js" の監査中',
        appThinkingText: 'AgentがコードのAST解析と修正パッチを生成中...',
        steps: [
          { type: 'log', text: '[17:03:01] [API] AG-UI HTTP/SSE リアルタイムストリームチャネルの確立に成功しました...', delay: 500 },
          { type: 'log', text: '[17:03:01] [API] code_audit ワークフローをロードし、対象ファイル "./src/db.js" を読み込み中...', delay: 600 },
          { type: 'progress', text: '✔ ファイルの読み込みに成功しました。サイズ: 2.4 KB, 計 78 行。', delay: 700 },
          { type: 'thinking', text: 'ℹ [Thinking] データベース接続プール設定の静的解析を実行します。チェック重点：1. アイドル接続のリーク; 2. プロセスをクラッシュさせる未処理のエラー。', delay: 1200 },
          { type: 'progress', text: '▶ ESLint および 抽象構文木(AST) 解析ツールの起動中...', delay: 700 },
          { type: 'progress', text: '✔ 静的スキャン完了。42行目の connect() が try-finally ブロック内で解放されていない接続リークを検出。', delay: 900 },
          { type: 'thinking', text: 'ℹ [Thinking] リークを修復するリファクタリング計画を生成し、LLMを呼び出してパフォーマンス向上案を抽出します。', delay: 1000 },
          { type: 'progress', text: '▶ リファクタリング提案生成のためLLMを呼び出し中...', delay: 800 },
          { type: 'progress', text: '✔ LLMレスポンス: 修正パッチファイルが生成されました。', delay: 700 },
          { type: 'output', text: '=== 監査 & リファクタリングレポート ===\n[File] ./src/db.js\n[Status] Fixed (1 leak resolved)\n[Details] client.release() 呼び出し経路を最適化し、エラー自動復旧を追加。', delay: 1000 }
        ],
        resultHtml: `
          <div class="bubble-title-icon"><i data-lucide="check-circle-2"></i> <span>コード監査の完了</span></div>
          <div class="bubble-content-box">
            <p><strong>監査レポート:</strong></p>
            <p>高負荷下でのハンドルリークを防止するため、クライアント終了ロジックを自動リファクタリングしました。</p>
          </div>
          <span class="bubble-meta">17:03</span>
        `,
        statusLabels: { preparing: '準備中', active: '実行中', done: '完了' }
      }
    },
    search: {
      en: {
        tuiTitle: 'deerflow-tui (trend_agent.py)',
        inputPlaceholder: 'Enter search keywords...',
        tuiInitialPrompt: 'omengye@AGENT-TUI:~$ deerflow run trend_agent -q "DeepMind AI Coding"',
        appSentText: 'Run workflow trend_agent, aggregating search topic "DeepMind AI Coding"',
        appThinkingText: 'Agent is scraping multiple sources and summarizing...',
        steps: [
          { type: 'log', text: '[17:04:10] [API] Successfully established AG-UI HTTP/SSE live stream channel...', delay: 500 },
          { type: 'log', text: '[17:04:10] [API] Loading trend_agent workflow, launching multi-source search...', delay: 600 },
          { type: 'progress', text: '✔ Fetching tasks sent to search engine, GitHub API, TechCrunch...', delay: 800 },
          { type: 'thinking', text: 'ℹ [Thinking] Search complete. Retrieved 12 articles and 4 repositories. Deduplicating and sorting items by popularity metrics.', delay: 1100 },
          { type: 'progress', text: '▶ Calling local tool: text_cleaner (cleaning irrelevant ads & HTML tags)...', delay: 700 },
          { type: 'progress', text: '✔ Data cleaning complete. 5 core articles retained.', delay: 600 },
          { type: 'thinking', text: 'ℹ [Thinking] Call LLM for multi-document cross-synthesis and summarize top 3 frontier trends.', delay: 1000 },
          { type: 'progress', text: '▶ Calling LLM for summary compilation...', delay: 800 },
          { type: 'progress', text: '✔ LLM Response: Summary reports compiled successfully.', delay: 600 },
          { type: 'output', text: '=== Trend Summary (DeepMind AI Coding) ===\n1. Multi-agent collaborative engineering is mainstream;\n2. Self-evolving agents that adaptively load skills are gaining traction;\n3. Terminal interfaces (TUI) are experiencing a resurgence for high-frequency dev tasks.', delay: 1000 }
        ],
        resultHtml: `
          <div class="bubble-title-icon"><i data-lucide="check-circle-2"></i> <span>Trends Synced</span></div>
          <div class="bubble-content-box">
            <p><strong>Top 3 Trends:</strong></p>
            <p>1. Collaborative Agent engineering;<br />2. Dynamic self-evolving skills;<br />3. TUI resurgence for dev efficiency.</p>
          </div>
          <span class="bubble-meta">17:04</span>
        `,
        statusLabels: { preparing: 'Preparing', active: 'Running', done: 'Completed' }
      },
      zh: {
        tuiTitle: 'deerflow-tui (trend_agent.py)',
        inputPlaceholder: '输入搜索热词 (如 "DeepMind AI Coding")...',
        tuiInitialPrompt: 'omengye@AGENT-TUI:~$ deerflow run trend_agent -q "DeepMind AI Coding"',
        appSentText: '运行工作流 trend_agent，聚合搜索主题 "DeepMind AI Coding"',
        appThinkingText: 'Agent 正在多源抓取并进行文本交叉总结...',
        steps: [
          { type: 'log', text: '[17:04:10] [API] 成功建立 AG-UI HTTP/SSE 实时流通道...', delay: 500 },
          { type: 'log', text: '[17:04:10] [API] 加载工作流 trend_agent，执行多源检索...', delay: 600 },
          { type: 'progress', text: '✔ 正在向搜索引擎、GitHub API、TechCrunch 发起检索任务...', delay: 800 },
          { type: 'thinking', text: 'ℹ [Thinking] 检索完成，共获取 12 篇相关文章及 4 个开源仓库。需要对内容进行去重、过滤，并按照热度降序排序。', delay: 1100 },
          { type: 'progress', text: '▶ 正在调用本地工具: text_cleaner (清洗无关广告和 HTML 标签)...', delay: 700 },
          { type: 'progress', text: '✔ 数据清洗完成。保留 5 篇核心技术分析报告。', delay: 600 },
          { type: 'thinking', text: 'ℹ [Thinking] 调用 LLM 进行多文档交叉分析，提炼出 3 个行业最前沿的主要风向点。', delay: 1000 },
          { type: 'progress', text: '▶ 正在调用 LLM 进行摘要整合与提炼...', delay: 800 },
          { type: 'progress', text: '✔ LLM 响应: 报告已成功提炼。', delay: 600 },
          { type: 'output', text: '=== 热点总结 (DeepMind AI Coding) ===\n1. Agent 协同开发成为主流趋势；\n2. 动态 Skills 自演化机制受关注度高；\n3. 命令行 TUI 界面在开发者中重新流行。', delay: 1000 }
        ],
        resultHtml: `
          <div class="bubble-title-icon"><i data-lucide="check-circle-2"></i> <span>热点聚合完成</span></div>
          <div class="bubble-content-box">
            <p><strong>3个核心趋势:</strong></p>
            <p>1. 协同开发成为主流；<br />2. 动态技能自演化；<br />3. 极客 TUI 界面重新流行。</p>
          </div>
          <span class="bubble-meta">17:04</span>
        `,
        statusLabels: { preparing: '准备中', active: '运行中', done: '已完成' }
      },
      ja: {
        tuiTitle: 'deerflow-tui (trend_agent.py)',
        inputPlaceholder: '検索キーワードを入力...',
        tuiInitialPrompt: 'omengye@AGENT-TUI:~$ deerflow run trend_agent -q "DeepMind AI Coding"',
        appSentText: 'ワークフロー trend_agent を実行、検索トピック "DeepMind AI Coding" を集約中',
        appThinkingText: 'Agentが複数ソースからの情報収集とクロスサマリーを実行中...',
        steps: [
          { type: 'log', text: '[17:04:10] [API] AG-UI HTTP/SSE リアルタイムストリームチャネルの確立に成功しました...', delay: 500 },
          { type: 'log', text: '[17:04:10] [API] trend_agent ワークフローをロードし、複数ソースからの検索を実行中...', delay: 600 },
          { type: 'progress', text: '✔ 検索エンジン、GitHub API、TechCrunch へのリクエストを送信中...', delay: 800 },
          { type: 'thinking', text: 'ℹ [Thinking] 検索完了。関連する12本の記事と4つのリポジトリを取得。重複排除し、人気指標順にソートします。', delay: 1100 },
          { type: 'progress', text: '▶ ローカルツールを呼び出し中: text_cleaner（不要な広告やHTMLタグの削除）...', delay: 700 },
          { type: 'progress', text: '✔ データクリーニング完了。5つの主要技術分析レポートを保持。', delay: 600 },
          { type: 'thinking', text: 'ℹ [Thinking] LLMを呼び出し、複数ドキュメントの相互分析を行い、最新トレンド3項目をまとめます。', delay: 1000 },
          { type: 'progress', text: '▶ 要約生成のためLLMを呼び出し中...', delay: 800 },
          { type: 'progress', text: '✔ LLMレスポンス: レポートの作成に成功しました。', delay: 600 },
          { type: 'output', text: '=== トレンド要約 (DeepMind AI Coding) ===\n1. マルチエージェント協調開発が主流トレンドに；\n2. 状況に応じてスキルを動的ロードする自己進化型エージェントが増加中；\n3. 高頻度な開発タスク向けにターミナル (TUI) が再流行。', delay: 1000 }
        ],
        resultHtml: `
          <div class="bubble-title-icon"><i data-lucide="check-circle-2"></i> <span>トレンド収集完了</span></div>
          <div class="bubble-content-box">
            <p><strong>3つの主要な傾向:</strong></p>
            <p>1. 協調型Agent開発が主流に；<br />2. 動的なスキル自己進化；<br />3. ターミナル TUI UIの再流行。</p>
          </div>
          <span class="bubble-meta">17:04</span>
        `,
        statusLabels: { preparing: '準備中', active: '実行中', done: '完了' }
      }
    }
  };

  const wfKeys = ['translate', 'coding', 'search'];
  let currentWfIndex = 0;
  let activeWfKey = 'translate';
  let isSimulating = false;
  let timerId = null;
  let autoPlayTimerId = null;

  // DOM Elements
  const workflowButtons = document.querySelectorAll('.workflow-btn');
  const tuiWindowTitle = document.getElementById('tui-window-title');
  const phonePlaceholder = document.getElementById('phone-input-placeholder');
  const tuiConsoleBody = document.getElementById('tui-console-body');
  const phoneChatBody = document.getElementById('phone-chat-body');
  const simStatusVal = document.getElementById('sim-status-val');
  const simStatusDot = simStatusVal.previousElementSibling;
  const simProgressBar = document.getElementById('sim-progress-bar');
  const phoneTimeDisplay = document.getElementById('phone-time-display');

  // Initialize Simulator Screen States
  function resetSimulatorView() {
    const wf = workflows[activeWfKey][currentLang];
    tuiWindowTitle.textContent = wf.tuiTitle;
    phonePlaceholder.textContent = wf.inputPlaceholder;
    
    // Reset status elements
    simStatusVal.textContent = wf.statusLabels.preparing;
    simStatusDot.className = 'status-dot dot-idle';
    simProgressBar.style.width = '0%';
    
    // Clear and reset console
    tuiConsoleBody.innerHTML = `
      <div class="console-line cursor-line"><span class="prompt">omengye@AGENT-TUI:~$</span> <span class="console-cursor"></span></div>
    `;
    
    // Update Phone Time
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    phoneTimeDisplay.textContent = timeStr;

    // Reset phone chat view
    let initialGreeting = '';
    if (currentLang === 'zh') {
      initialGreeting = 'API 后端连接成功！准备运行 Agent 工作流。您可以在端侧选择对应的工作流，此处将展示联动响应。';
    } else if (currentLang === 'ja') {
      initialGreeting = 'API バックエンドに接続しました！Agent ワークフローを実行する準備が整いました。左側でワークフローを選択して協調動作を確認してください。';
    } else {
      initialGreeting = 'API backend connected! Ready to execute agent workflows. Select a workflow to see coordinated actions.';
    }

    const todayLabel = currentLang === 'zh' ? '今天' : (currentLang === 'ja' ? '今日' : 'Today');

    phoneChatBody.innerHTML = `
      <div class="chat-time">${todayLabel} ${timeStr}</div>
      <div class="chat-bubble bubble-received">
        <p>${initialGreeting}</p>
        <span class="bubble-meta">${timeStr}</span>
      </div>
    `;
    
    isSimulating = false;
    clearTimeout(timerId);
    clearTimeout(autoPlayTimerId);
  }

  // Helper function to append line to terminal with scroll-down
  function appendTuiLine(content, cssClass = '') {
    const cursorLine = tuiConsoleBody.querySelector('.cursor-line');
    const newLine = document.createElement('div');
    newLine.className = `console-line ${cssClass}`;
    newLine.innerHTML = content;
    
    tuiConsoleBody.insertBefore(newLine, cursorLine);
    tuiConsoleBody.scrollTop = tuiConsoleBody.scrollHeight;
  }

  // Simulation execution function
  function runSimulation() {
    isSimulating = true;
    
    const wf = workflows[activeWfKey][currentLang];
    simStatusVal.textContent = wf.statusLabels.active;
    simStatusDot.className = 'status-dot dot-active';
    
    const steps = wf.steps;
    const totalSteps = steps.length;
    let currentStepIndex = 0;

    // 1. TUI Terminal: Output the initial prompt command
    const firstLine = tuiConsoleBody.querySelector('.console-line');
    if (firstLine) {
      firstLine.innerHTML = `<span class="prompt">omengye@AGENT-TUI:~$</span> ${wf.tuiInitialPrompt.split('~$ ')[1]}`;
    }
    
    // 2. Phone App: Add "Sent" message bubble
    const timeStr = phoneTimeDisplay.textContent;
    const sentBubble = document.createElement('div');
    sentBubble.className = 'chat-bubble bubble-sent';
    sentBubble.innerHTML = `<p>${wf.appSentText}</p><span class="bubble-meta">${timeStr}</span>`;
    phoneChatBody.appendChild(sentBubble);
    phoneChatBody.scrollTop = phoneChatBody.scrollHeight;

    // Add Phone "Thinking" placeholder bubble
    const thinkingBubble = document.createElement('div');
    thinkingBubble.className = 'chat-bubble bubble-received bubble-thinking';
    thinkingBubble.innerHTML = `
      <div class="thinking-loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p class="thinking-label">${wf.appThinkingText}</p>
    `;
    
    // Delayed display of phone thinking bubble
    setTimeout(() => {
      phoneChatBody.appendChild(thinkingBubble);
      phoneChatBody.scrollTop = phoneChatBody.scrollHeight;
    }, 400);

    // Recursively execute simulation steps
    function executeStep() {
      if (currentStepIndex >= totalSteps) {
        // Simulation finished
        simStatusVal.textContent = wf.statusLabels.done;
        simStatusDot.className = 'status-dot dot-idle';
        simProgressBar.style.width = '100%';
        
        // Remove phone thinking and show final result bubble
        if (thinkingBubble.parentNode) {
          phoneChatBody.removeChild(thinkingBubble);
        }
        
        const resultBubble = document.createElement('div');
        resultBubble.className = 'chat-bubble bubble-received bubble-result';
        resultBubble.innerHTML = wf.resultHtml;
        phoneChatBody.appendChild(resultBubble);
        
        // Trigger lucide icon compilation inside the injected html
        if (typeof lucide !== 'undefined') {
          lucide.createIcons({
            attrs: {
              class: 'icon-small'
            }
          });
        }
        
        phoneChatBody.scrollTop = phoneChatBody.scrollHeight;
        isSimulating = false;

        // Auto-play: schedule transition to the next workflow in 5 seconds
        autoPlayTimerId = setTimeout(playNextWorkflow, 5000);
        return;
      }

      const step = steps[currentStepIndex];
      let lineClass = 'line-log';
      if (step.type === 'progress') lineClass = 'line-log';
      else if (step.type === 'thinking') lineClass = 'line-info text-blue';
      else if (step.type === 'output') lineClass = 'line-output';
      
      let processedText = step.text;
      processedText = processedText
        .replace(/✔/g, '<span class="text-green">✔</span>')
        .replace(/▶/g, '<span class="text-yellow">▶</span>')
        .replace(/ℹ/g, '<span class="text-blue">ℹ</span>');

      appendTuiLine(processedText, lineClass);
      
      // Update progress bar
      const progressPercent = Math.round(((currentStepIndex + 1) / totalSteps) * 95);
      simProgressBar.style.width = `${progressPercent}%`;

      currentStepIndex++;
      timerId = setTimeout(executeStep, step.delay || 500);
    }

    // Start execution loop after short initial delay
    timerId = setTimeout(executeStep, 800);
  }

  // Handle switching to next workflow automatically
  function playNextWorkflow() {
    currentWfIndex = (currentWfIndex + 1) % wfKeys.length;
    activeWfKey = wfKeys[currentWfIndex];
    
    // Highlight the tab button
    workflowButtons.forEach(b => b.classList.remove('active'));
    const targetBtn = document.querySelector(`.workflow-btn[data-wf="${activeWfKey}"]`);
    if (targetBtn) targetBtn.classList.add('active');
    
    resetSimulatorView();
    // Wait 1.5 seconds, then execute
    timerId = setTimeout(runSimulation, 1500);
  }

  // Handle manual switching via tab buttons
  workflowButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Find the index of the clicked workflow
      const clickedWf = btn.getAttribute('data-wf');
      
      // Highlight button
      workflowButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      activeWfKey = clickedWf;
      currentWfIndex = wfKeys.indexOf(clickedWf);
      
      resetSimulatorView();
      // Start immediately for user's click
      timerId = setTimeout(runSimulation, 1000);
    });
  });

  // Initialize page language and start first simulation automatically
  updatePageLanguage(currentLang);
  resetSimulatorView();
  timerId = setTimeout(runSimulation, 1500);
});
