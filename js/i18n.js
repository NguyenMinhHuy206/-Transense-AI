/* =========================================================
   TRANSENSE AI
   WEBSITE LANGUAGE SYSTEM
   FIXED VERSION
========================================================= */

(function () {

    "use strict";


    /* =========================================================
       LANGUAGE LIST
    ========================================================= */

    const LANGUAGES = [

        {
            code: "vi",
            flag: "VN",
            emoji: "🇻🇳",
            name: "Tiếng Việt"
        },

        {
            code: "en",
            flag: "US",
            emoji: "🇺🇸",
            name: "English"
        },

        {
            code: "zh",
            flag: "CN",
            emoji: "🇨🇳",
            name: "简体中文"
        },

        {
            code: "ja",
            flag: "JP",
            emoji: "🇯🇵",
            name: "日本語"
        },

        {
            code: "ko",
            flag: "KR",
            emoji: "🇰🇷",
            name: "한국어"
        },

        {
            code: "fr",
            flag: "FR",
            emoji: "🇫🇷",
            name: "Français"
        },

        {
            code: "es",
            flag: "ES",
            emoji: "🇪🇸",
            name: "Español"
        },

        {
            code: "de",
            flag: "DE",
            emoji: "🇩🇪",
            name: "Deutsch"
        },

        {
            code: "it",
            flag: "IT",
            emoji: "🇮🇹",
            name: "Italiano"
        },

        {
            code: "ru",
            flag: "RU",
            emoji: "🇷🇺",
            name: "Русский"
        },

        {
            code: "th",
            flag: "TH",
            emoji: "🇹🇭",
            name: "ไทย"
        },

        {
            code: "cs",
            flag: "CZ",
            emoji: "🇨🇿",
            name: "Čeština"
        }

    ];


    /* =========================================================
       TRANSLATIONS
    ========================================================= */

    const translations = {


        /* =====================================================
           VIETNAMESE
        ====================================================== */

        vi: {

            navTranslate:
                "Trang dịch",

            navHistory:
                "Lịch sử",

            navAccount:
                "Tài khoản",

            navAbout:
                "Giới thiệu",

            navLogin:
                "Đăng Nhập",


            heroBadge:
                "Multilingual Context-aware Translation",

            heroTitle1:
                "Dịch Anh – Việt",

            heroTitle2:
                "Theo Đúng Ngữ Cảnh",

            heroDescription:
                "Transense AI lấy tiếng Anh làm trọng tâm nghiên cứu và mở rộng thử nghiệm thêm 12 ngôn ngữ nguồn, hỗ trợ phát âm, nhập bằng giọng nói và phân tích ngữ cảnh trước khi tạo bản dịch tiếng Việt.",


            sourceLanguage:
                "Tiếng Anh",

            targetLanguage:
                "Tiếng Việt",

            workspaceLabel:
                "MULTILINGUAL TRANSLATION WORKSPACE",

            workspaceTitle:
                "Dịch Văn Bản Theo Ngữ Cảnh",

            workspaceDescription:
                "Chọn ngôn ngữ nguồn, nhập hoặc đọc nội dung và thực hiện bản dịch sang tiếng Việt. Phiên bản hiện tại sử dụng dữ liệu mô phỏng và được thiết kế sẵn để tích hợp AI API.",

            apiReady:
                "Sẵn sàng kết nối API",

            sourceText:
                "VĂN BẢN NGUỒN",

            aiResult:
                "KẾT QUẢ AI",

            clear:
                "Xóa",

            copy:
                "Sao chép",

            sample:
                "Câu mẫu",

            translate:
                "Dịch bằng AI",

            translating:
                "Đang phân tích ngữ cảnh...",

            resultWaiting:
                "Bản dịch sẽ hiển thị tại đây",

            resultInstruction:
                "Nhập nội dung và chọn “Dịch bằng AI” để bắt đầu.",

            pronunciation:
                "PHIÊN ÂM / CÁCH ĐỌC",


            historyLabel:
                "TRANSLATION HISTORY",

            historyTitle:
                "Lịch Sử Dịch",

            historyDescription:
                "Xem lại các nội dung bạn đã dịch bằng Transense AI.",

            translationCount:
                "bản dịch",

            delete:
                "Xóa",

            emptyHistory:
                "Chưa có lịch sử dịch",


            accountSettings:
                "ACCOUNT SETTINGS",

            accountTitle:
                "Thông Tin Tài Khoản",

            accountDescription:
                "Quản lý thông tin cá nhân và tài khoản Transense AI của bạn.",

            personalInfo:
                "THÔNG TIN CÁ NHÂN",

            fullName:
                "Họ và tên",

            email:
                "Email",

            accountStatus:
                "Trạng thái tài khoản",

            active:
                "Đang hoạt động",

            editInformation:
                "Chỉnh sửa thông tin",

            logout:
                "Đăng xuất",


            loginLabel:
                "ĐĂNG NHẬP TÀI KHOẢN",

            loginTitle:
                "Đăng Nhập",

            google:
                "Tiếp tục với Google",

            apple:
                "Tiếp tục với Apple",

            phone:
                "Tiếp tục với Điện thoại",

            or:
                "hoặc",

            noAccount:
                "Chưa có tài khoản?",

            createAccount:
                "Tạo tài khoản",

            continue:
                "Tiếp tục",

            back:
                "Quay lại",


            registerLabel:
                "TẠO TÀI KHOẢN",

            registerTitle:
                "Đăng Ký",

            registerDescription:
                "Điền thông tin bên dưới để tạo tài khoản sử dụng trong phiên bản demo Transense AI.",

            password:
                "Mật khẩu",

            confirmPassword:
                "Xác nhận mật khẩu",

            registerButton:
                "Tạo tài khoản",

            alreadyAccount:
                "Đã có tài khoản?",

            signIn:
                "Đăng nhập",

            terms:
                "Tôi đồng ý với điều khoản sử dụng",

            weak:
                "Yếu",

            medium:
                "Trung bình",

            good:
                "Tốt",

            strong:
                "Mạnh",

            notEntered:
                "Chưa nhập mật khẩu",

            minimum:
                "Tối thiểu 8 ký tự",


            accountCreateChip:
                "Tạo tài khoản Transense AI",

            registerHero1:
                "Bắt đầu với một trải nghiệm",

            registerHero2:
                "dịch thông minh hơn.",

            contextTranslation:
                "Dịch theo ngữ cảnh",

            saveHistory:
                "Lưu lịch sử bản dịch",

            pronunciationAudio:
                "Phiên âm & phát âm",

            threeSteps:
                "BẮT ĐẦU CHỈ VỚI 3 BƯỚC",

            stepCreate:
                "Tạo tài khoản",

            stepLogin:
                "Đăng nhập",

            stepTranslate:
                "Bắt đầu dịch",


            aboutLabel:
                "PROJECT INFORMATION",

            aboutTitle:
                "Giới Thiệu Đồ Án 1",

            practicalContext:
                "Bối Cảnh Thực Tiễn",

            objectives:
                "Mục Tiêu Đề Tài",

            scope:
                "Phạm Vi Đề Tài",

            theory:
                "Cơ Sở Lý Thuyết",

            technology:
                "Công Nghệ Sử Dụng",

            workflow:
                "Định Hướng Hoạt Động",

            teacher:
                "Thông Tin Giảng Viên",

            members:
                "Thành Viên Nhóm"

        },


        /* =====================================================
           ENGLISH
        ====================================================== */

        en: {

            navTranslate:
                "Translator",

            navHistory:
                "History",

            navAccount:
                "Account",

            navAbout:
                "About",

            navLogin:
                "Sign In",


            heroBadge:
                "Multilingual Context-aware Translation",

            heroTitle1:
                "English – Vietnamese Translation",

            heroTitle2:
                "In the Right Context",

            heroDescription:
                "Transense AI focuses on English translation research while experimentally supporting 12 additional source languages, pronunciation, voice input and context analysis before producing Vietnamese translations.",


            sourceLanguage:
                "English",

            targetLanguage:
                "Vietnamese",

            workspaceLabel:
                "MULTILINGUAL TRANSLATION WORKSPACE",

            workspaceTitle:
                "Context-aware Translation",

            workspaceDescription:
                "Choose a source language, enter or speak your content and translate it into Vietnamese. The current prototype uses simulated data and is designed for future AI API integration.",

            apiReady:
                "Ready for API connection",

            sourceText:
                "SOURCE TEXT",

            aiResult:
                "AI RESULT",

            clear:
                "Clear",

            copy:
                "Copy",

            sample:
                "Example",

            translate:
                "Translate with AI",

            translating:
                "Analyzing context...",

            resultWaiting:
                "Translation will appear here",

            resultInstruction:
                "Enter content and select “Translate with AI” to begin.",

            pronunciation:
                "PRONUNCIATION",


            historyLabel:
                "TRANSLATION HISTORY",

            historyTitle:
                "Translation History",

            historyDescription:
                "Review content you have translated with Transense AI.",

            translationCount:
                "translations",

            delete:
                "Delete",

            emptyHistory:
                "No translation history",


            accountSettings:
                "ACCOUNT SETTINGS",

            accountTitle:
                "Account Information",

            accountDescription:
                "Manage your personal information and Transense AI account.",

            personalInfo:
                "PERSONAL INFORMATION",

            fullName:
                "Full name",

            email:
                "Email",

            accountStatus:
                "Account status",

            active:
                "Active",

            editInformation:
                "Edit information",

            logout:
                "Sign out",


            loginLabel:
                "ACCOUNT LOGIN",

            loginTitle:
                "Sign In",

            google:
                "Continue with Google",

            apple:
                "Continue with Apple",

            phone:
                "Continue with Phone",

            or:
                "or",

            noAccount:
                "Don't have an account?",

            createAccount:
                "Create account",

            continue:
                "Continue",

            back:
                "Back",


            registerLabel:
                "CREATE ACCOUNT",

            registerTitle:
                "Sign Up",

            registerDescription:
                "Enter your information below to create a Transense AI demo account.",

            password:
                "Password",

            confirmPassword:
                "Confirm password",

            registerButton:
                "Create account",

            alreadyAccount:
                "Already have an account?",

            signIn:
                "Sign in",

            terms:
                "I agree to the terms of use",

            weak:
                "Weak",

            medium:
                "Medium",

            good:
                "Good",

            strong:
                "Strong",

            notEntered:
                "No password entered",

            minimum:
                "Minimum 8 characters",


            accountCreateChip:
                "Create your Transense AI account",

            registerHero1:
                "Start with a",

            registerHero2:
                "smarter translation experience.",

            contextTranslation:
                "Context-aware translation",

            saveHistory:
                "Save translation history",

            pronunciationAudio:
                "Pronunciation & audio",

            threeSteps:
                "GET STARTED IN 3 STEPS",

            stepCreate:
                "Create account",

            stepLogin:
                "Sign in",

            stepTranslate:
                "Start translating",


            aboutLabel:
                "PROJECT INFORMATION",

            aboutTitle:
                "Project 1 Introduction",

            practicalContext:
                "Practical Context",

            objectives:
                "Project Objectives",

            scope:
                "Project Scope",

            theory:
                "Theoretical Foundation",

            technology:
                "Technologies Used",

            workflow:
                "System Workflow",

            teacher:
                "Supervisor Information",

            members:
                "Team Members"

        },


        /* =====================================================
           CHINESE
        ====================================================== */

        zh: {

            navTranslate: "翻译",
            navHistory: "历史",
            navAccount: "账户",
            navAbout: "关于",
            navLogin: "登录",

            heroBadge: "多语言上下文翻译",
            heroTitle1: "英语 – 越南语翻译",
            heroTitle2: "准确理解上下文",
            heroDescription:
                "Transense AI 以英语翻译研究为核心，同时实验支持其他 12 种源语言、发音、语音输入和上下文分析。",

            sourceLanguage: "英语",
            targetLanguage: "越南语",
            workspaceLabel: "多语言 AI 翻译工作区",
            workspaceTitle: "上下文翻译",
            workspaceDescription:
                "选择源语言，输入或朗读内容，然后翻译为越南语。",
            apiReady: "准备连接 API",
            sourceText: "原文",
            aiResult: "AI 结果",
            clear: "清除",
            copy: "复制",
            sample: "示例",
            translate: "AI 翻译",
            translating: "正在分析上下文...",
            resultWaiting: "译文将在这里显示",
            resultInstruction: "输入内容并选择 AI 翻译。",
            pronunciation: "发音",

            historyLabel: "翻译历史",
            historyTitle: "翻译历史",
            historyDescription: "查看以前的翻译内容。",
            translationCount: "条翻译",
            delete: "删除",
            emptyHistory: "暂无翻译历史",

            accountSettings: "账户设置",
            accountTitle: "账户信息",
            accountDescription: "管理个人信息和账户。",
            personalInfo: "个人信息",
            fullName: "姓名",
            email: "电子邮箱",
            accountStatus: "账户状态",
            active: "正常",
            editInformation: "编辑信息",
            logout: "退出登录",

            loginLabel: "账户登录",
            loginTitle: "登录",
            google: "使用 Google 继续",
            apple: "使用 Apple 继续",
            phone: "使用手机号继续",
            or: "或",
            noAccount: "还没有账户？",
            createAccount: "创建账户",
            continue: "继续",
            back: "返回",

            registerLabel: "创建账户",
            registerTitle: "注册",
            registerDescription: "填写以下信息创建 Transense AI 演示账户。",
            password: "密码",
            confirmPassword: "确认密码",
            registerButton: "创建账户",
            alreadyAccount: "已有账户？",
            signIn: "登录",
            terms: "我同意使用条款",
            weak: "弱",
            medium: "中等",
            good: "良好",
            strong: "强",
            notEntered: "尚未输入密码",
            minimum: "至少 8 个字符",

            accountCreateChip: "创建 Transense AI 账户",
            registerHero1: "开始体验",
            registerHero2: "更智能的翻译。",
            contextTranslation: "上下文翻译",
            saveHistory: "保存翻译历史",
            pronunciationAudio: "发音和音频",
            threeSteps: "只需 3 步即可开始",
            stepCreate: "创建账户",
            stepLogin: "登录",
            stepTranslate: "开始翻译",

            aboutLabel: "项目信息",
            aboutTitle: "项目一介绍",
            practicalContext: "实际背景",
            objectives: "项目目标",
            scope: "项目范围",
            theory: "理论基础",
            technology: "使用技术",
            workflow: "系统流程",
            teacher: "指导教师",
            members: "项目成员"

        },


        /* =====================================================
           JAPANESE
        ====================================================== */

        ja: {

            navTranslate: "翻訳",
            navHistory: "履歴",
            navAccount: "アカウント",
            navAbout: "紹介",
            navLogin: "ログイン",

            heroBadge: "多言語コンテキスト翻訳",
            heroTitle1: "英語 – ベトナム語翻訳",
            heroTitle2: "正しい文脈で",
            heroDescription:
                "Transense AI は英語を中心に研究し、その他12言語、発音、音声入力、文脈分析を試験的にサポートします。",

            sourceLanguage: "英語",
            targetLanguage: "ベトナム語",
            workspaceLabel: "多言語翻訳ワークスペース",
            workspaceTitle: "文脈に基づく翻訳",
            workspaceDescription:
                "入力言語を選び、文章を入力または音声入力してベトナム語に翻訳します。",
            apiReady: "API接続準備完了",
            sourceText: "原文",
            aiResult: "AI 結果",
            clear: "クリア",
            copy: "コピー",
            sample: "例文",
            translate: "AIで翻訳",
            translating: "文脈を分析中...",
            resultWaiting: "翻訳結果がここに表示されます",
            resultInstruction: "内容を入力してAI翻訳を選択してください。",
            pronunciation: "発音",

            historyLabel: "翻訳履歴",
            historyTitle: "翻訳履歴",
            historyDescription: "以前の翻訳を確認します。",
            translationCount: "件",
            delete: "削除",
            emptyHistory: "翻訳履歴がありません",

            accountSettings: "アカウント設定",
            accountTitle: "アカウント情報",
            accountDescription: "個人情報とアカウントを管理します。",
            personalInfo: "個人情報",
            fullName: "氏名",
            email: "メール",
            accountStatus: "アカウント状態",
            active: "有効",
            editInformation: "情報を編集",
            logout: "ログアウト",

            loginLabel: "アカウントログイン",
            loginTitle: "ログイン",
            google: "Googleで続行",
            apple: "Appleで続行",
            phone: "電話番号で続行",
            or: "または",
            noAccount: "アカウントをお持ちでないですか？",
            createAccount: "アカウント作成",
            continue: "続行",
            back: "戻る",

            registerLabel: "アカウント作成",
            registerTitle: "登録",
            registerDescription: "Transense AI デモアカウントを作成します。",
            password: "パスワード",
            confirmPassword: "パスワード確認",
            registerButton: "アカウント作成",
            alreadyAccount: "すでにアカウントがありますか？",
            signIn: "ログイン",
            terms: "利用規約に同意します",
            weak: "弱い",
            medium: "普通",
            good: "良い",
            strong: "強い",
            notEntered: "パスワード未入力",
            minimum: "8文字以上",

            accountCreateChip: "Transense AI アカウントを作成",
            registerHero1: "よりスマートな",
            registerHero2: "翻訳体験を始めましょう。",
            contextTranslation: "文脈翻訳",
            saveHistory: "翻訳履歴を保存",
            pronunciationAudio: "発音と音声",
            threeSteps: "3ステップで開始",
            stepCreate: "アカウント作成",
            stepLogin: "ログイン",
            stepTranslate: "翻訳開始",

            aboutLabel: "プロジェクト情報",
            aboutTitle: "プロジェクト1紹介",
            practicalContext: "実践的背景",
            objectives: "プロジェクト目標",
            scope: "プロジェクト範囲",
            theory: "理論的基礎",
            technology: "使用技術",
            workflow: "システムフロー",
            teacher: "指導教員",
            members: "メンバー"

        },


        /* =====================================================
           KOREAN
        ====================================================== */

        ko: {

            navTranslate: "번역",
            navHistory: "기록",
            navAccount: "계정",
            navAbout: "소개",
            navLogin: "로그인",

            heroBadge: "다국어 문맥 번역",
            heroTitle1: "영어 – 베트남어 번역",
            heroTitle2: "올바른 문맥으로",
            heroDescription:
                "Transense AI는 영어 번역을 중심으로 연구하며 12개 추가 언어, 발음, 음성 입력 및 문맥 분석을 시험 지원합니다.",

            sourceLanguage: "영어",
            targetLanguage: "베트남어",
            workspaceLabel: "다국어 번역 작업 공간",
            workspaceTitle: "문맥 기반 번역",
            workspaceDescription:
                "원본 언어를 선택하고 내용을 입력하거나 말하여 베트남어로 번역합니다.",
            apiReady: "API 연결 준비 완료",
            sourceText: "원문",
            aiResult: "AI 결과",
            clear: "지우기",
            copy: "복사",
            sample: "예문",
            translate: "AI로 번역",
            translating: "문맥 분석 중...",
            resultWaiting: "번역 결과가 표시됩니다",
            resultInstruction: "내용을 입력하고 AI 번역을 선택하세요.",
            pronunciation: "발음",

            historyLabel: "번역 기록",
            historyTitle: "번역 기록",
            historyDescription: "이전 번역 내용을 확인합니다.",
            translationCount: "개의 번역",
            delete: "삭제",
            emptyHistory: "번역 기록이 없습니다",

            accountSettings: "계정 설정",
            accountTitle: "계정 정보",
            accountDescription: "개인 정보와 계정을 관리합니다.",
            personalInfo: "개인 정보",
            fullName: "이름",
            email: "이메일",
            accountStatus: "계정 상태",
            active: "활성",
            editInformation: "정보 수정",
            logout: "로그아웃",

            loginLabel: "계정 로그인",
            loginTitle: "로그인",
            google: "Google로 계속",
            apple: "Apple로 계속",
            phone: "전화번호로 계속",
            or: "또는",
            noAccount: "계정이 없으신가요?",
            createAccount: "계정 만들기",
            continue: "계속",
            back: "뒤로",

            registerLabel: "계정 만들기",
            registerTitle: "회원가입",
            registerDescription: "Transense AI 데모 계정을 생성하세요.",
            password: "비밀번호",
            confirmPassword: "비밀번호 확인",
            registerButton: "계정 만들기",
            alreadyAccount: "이미 계정이 있으신가요?",
            signIn: "로그인",
            terms: "이용약관에 동의합니다",
            weak: "약함",
            medium: "보통",
            good: "좋음",
            strong: "강함",
            notEntered: "비밀번호 없음",
            minimum: "최소 8자",

            accountCreateChip: "Transense AI 계정 생성",
            registerHero1: "더 스마트한",
            registerHero2: "번역 경험을 시작하세요.",
            contextTranslation: "문맥 번역",
            saveHistory: "번역 기록 저장",
            pronunciationAudio: "발음 및 음성",
            threeSteps: "3단계로 시작",
            stepCreate: "계정 만들기",
            stepLogin: "로그인",
            stepTranslate: "번역 시작",

            aboutLabel: "프로젝트 정보",
            aboutTitle: "프로젝트 1 소개",
            practicalContext: "실제 배경",
            objectives: "프로젝트 목표",
            scope: "프로젝트 범위",
            theory: "이론적 기반",
            technology: "사용 기술",
            workflow: "시스템 흐름",
            teacher: "지도 교수",
            members: "팀원"

        },


        /* =====================================================
           FRENCH
        ====================================================== */

        fr: {

            navTranslate: "Traduction",
            navHistory: "Historique",
            navAccount: "Compte",
            navAbout: "À propos",
            navLogin: "Connexion",

            heroBadge: "Traduction multilingue contextuelle",
            heroTitle1: "Anglais – Vietnamien",
            heroTitle2: "Dans le bon contexte",
            heroDescription:
                "Transense AI se concentre sur l’anglais tout en expérimentant 12 langues supplémentaires, la prononciation, la saisie vocale et l’analyse contextuelle.",

            sourceLanguage: "Anglais",
            targetLanguage: "Vietnamien",
            workspaceLabel: "ESPACE DE TRADUCTION MULTILINGUE",
            workspaceTitle: "Traduction contextuelle",
            workspaceDescription:
                "Choisissez une langue source, saisissez ou dictez votre contenu puis traduisez-le en vietnamien.",
            apiReady: "Prêt pour l’API",
            sourceText: "TEXTE SOURCE",
            aiResult: "RÉSULTAT IA",
            clear: "Effacer",
            copy: "Copier",
            sample: "Exemple",
            translate: "Traduire avec l’IA",
            translating: "Analyse du contexte...",
            resultWaiting: "La traduction apparaîtra ici",
            resultInstruction: "Saisissez du contenu puis sélectionnez Traduire avec l’IA.",
            pronunciation: "PRONONCIATION",

            historyLabel: "HISTORIQUE",
            historyTitle: "Historique des traductions",
            historyDescription: "Consultez vos traductions précédentes.",
            translationCount: "traductions",
            delete: "Supprimer",
            emptyHistory: "Aucun historique",

            accountSettings: "PARAMÈTRES DU COMPTE",
            accountTitle: "Informations du compte",
            accountDescription: "Gérez vos informations personnelles.",
            personalInfo: "INFORMATIONS PERSONNELLES",
            fullName: "Nom complet",
            email: "E-mail",
            accountStatus: "Statut du compte",
            active: "Actif",
            editInformation: "Modifier",
            logout: "Déconnexion",

            loginLabel: "CONNEXION",
            loginTitle: "Connexion",
            google: "Continuer avec Google",
            apple: "Continuer avec Apple",
            phone: "Continuer avec le téléphone",
            or: "ou",
            noAccount: "Pas encore de compte ?",
            createAccount: "Créer un compte",
            continue: "Continuer",
            back: "Retour",

            registerLabel: "CRÉER UN COMPTE",
            registerTitle: "Inscription",
            registerDescription: "Créez un compte démo Transense AI.",
            password: "Mot de passe",
            confirmPassword: "Confirmer le mot de passe",
            registerButton: "Créer un compte",
            alreadyAccount: "Vous avez déjà un compte ?",
            signIn: "Connexion",
            terms: "J’accepte les conditions d’utilisation",
            weak: "Faible",
            medium: "Moyen",
            good: "Bon",
            strong: "Fort",
            notEntered: "Mot de passe non saisi",
            minimum: "Minimum 8 caractères",

            accountCreateChip: "Créer un compte Transense AI",
            registerHero1: "Commencez avec une",
            registerHero2: "expérience de traduction plus intelligente.",
            contextTranslation: "Traduction contextuelle",
            saveHistory: "Historique des traductions",
            pronunciationAudio: "Prononciation & audio",
            threeSteps: "COMMENCEZ EN 3 ÉTAPES",
            stepCreate: "Créer un compte",
            stepLogin: "Connexion",
            stepTranslate: "Commencer à traduire",

            aboutLabel: "INFORMATIONS DU PROJET",
            aboutTitle: "Présentation du Projet 1",
            practicalContext: "Contexte pratique",
            objectives: "Objectifs",
            scope: "Périmètre du projet",
            theory: "Fondements théoriques",
            technology: "Technologies utilisées",
            workflow: "Fonctionnement",
            teacher: "Enseignant",
            members: "Membres"

        },


        /* =====================================================
           SPANISH
        ====================================================== */

        es: {

            navTranslate: "Traducir",
            navHistory: "Historial",
            navAccount: "Cuenta",
            navAbout: "Información",
            navLogin: "Iniciar sesión",

            heroBadge: "Traducción multilingüe contextual",
            heroTitle1: "Inglés – Vietnamita",
            heroTitle2: "En el contexto correcto",
            heroDescription:
                "Transense AI se centra en el inglés y prueba 12 idiomas adicionales, pronunciación, entrada por voz y análisis de contexto.",

            sourceLanguage: "Inglés",
            targetLanguage: "Vietnamita",
            workspaceLabel: "ESPACIO DE TRADUCCIÓN MULTILINGÜE",
            workspaceTitle: "Traducción contextual",
            workspaceDescription:
                "Selecciona un idioma, introduce o dicta contenido y tradúcelo al vietnamita.",
            apiReady: "API lista",
            sourceText: "TEXTO ORIGINAL",
            aiResult: "RESULTADO IA",
            clear: "Borrar",
            copy: "Copiar",
            sample: "Ejemplo",
            translate: "Traducir con IA",
            translating: "Analizando contexto...",
            resultWaiting: "La traducción aparecerá aquí",
            resultInstruction: "Introduce contenido y selecciona Traducir con IA.",
            pronunciation: "PRONUNCIACIÓN",

            historyLabel: "HISTORIAL",
            historyTitle: "Historial de traducción",
            historyDescription: "Consulta tus traducciones anteriores.",
            translationCount: "traducciones",
            delete: "Eliminar",
            emptyHistory: "Sin historial",

            accountSettings: "CONFIGURACIÓN DE CUENTA",
            accountTitle: "Información de la cuenta",
            accountDescription: "Gestiona tu información personal.",
            personalInfo: "INFORMACIÓN PERSONAL",
            fullName: "Nombre completo",
            email: "Correo electrónico",
            accountStatus: "Estado de la cuenta",
            active: "Activo",
            editInformation: "Editar información",
            logout: "Cerrar sesión",

            loginLabel: "INICIAR SESIÓN",
            loginTitle: "Iniciar sesión",
            google: "Continuar con Google",
            apple: "Continuar con Apple",
            phone: "Continuar con teléfono",
            or: "o",
            noAccount: "¿No tienes una cuenta?",
            createAccount: "Crear cuenta",
            continue: "Continuar",
            back: "Volver",

            registerLabel: "CREAR CUENTA",
            registerTitle: "Registrarse",
            registerDescription: "Crea una cuenta demo de Transense AI.",
            password: "Contraseña",
            confirmPassword: "Confirmar contraseña",
            registerButton: "Crear cuenta",
            alreadyAccount: "¿Ya tienes una cuenta?",
            signIn: "Iniciar sesión",
            terms: "Acepto los términos de uso",
            weak: "Débil",
            medium: "Media",
            good: "Buena",
            strong: "Fuerte",
            notEntered: "Contraseña no introducida",
            minimum: "Mínimo 8 caracteres",

            accountCreateChip: "Crear cuenta Transense AI",
            registerHero1: "Empieza con una",
            registerHero2: "experiencia de traducción más inteligente.",
            contextTranslation: "Traducción contextual",
            saveHistory: "Guardar historial",
            pronunciationAudio: "Pronunciación y audio",
            threeSteps: "EMPIEZA EN 3 PASOS",
            stepCreate: "Crear cuenta",
            stepLogin: "Iniciar sesión",
            stepTranslate: "Empezar a traducir",

            aboutLabel: "INFORMACIÓN DEL PROYECTO",
            aboutTitle: "Introducción al Proyecto 1",
            practicalContext: "Contexto práctico",
            objectives: "Objetivos",
            scope: "Alcance",
            theory: "Fundamentos teóricos",
            technology: "Tecnologías utilizadas",
            workflow: "Flujo del sistema",
            teacher: "Profesor",
            members: "Miembros"

        },


        /* =====================================================
           GERMAN
        ====================================================== */

        de: {

            navTranslate: "Übersetzen",
            navHistory: "Verlauf",
            navAccount: "Konto",
            navAbout: "Über",
            navLogin: "Anmelden",

            heroBadge: "Mehrsprachige Kontextübersetzung",
            heroTitle1: "Englisch – Vietnamesisch",
            heroTitle2: "Im richtigen Kontext",
            heroDescription:
                "Transense AI konzentriert sich auf Englisch und testet 12 weitere Sprachen, Aussprache, Spracheingabe und Kontextanalyse.",

            sourceLanguage: "Englisch",
            targetLanguage: "Vietnamesisch",
            workspaceLabel: "MEHRSPRACHIGER ÜBERSETZUNGSBEREICH",
            workspaceTitle: "Kontextbezogene Übersetzung",
            workspaceDescription:
                "Wählen Sie eine Ausgangssprache, geben oder sprechen Sie Inhalte ein und übersetzen Sie sie ins Vietnamesische.",
            apiReady: "API bereit",
            sourceText: "QUELLTEXT",
            aiResult: "KI-ERGEBNIS",
            clear: "Löschen",
            copy: "Kopieren",
            sample: "Beispiel",
            translate: "Mit KI übersetzen",
            translating: "Kontextanalyse...",
            resultWaiting: "Die Übersetzung erscheint hier",
            resultInstruction: "Text eingeben und Mit KI übersetzen wählen.",
            pronunciation: "AUSSPRACHE",

            historyLabel: "ÜBERSETZUNGSVERLAUF",
            historyTitle: "Übersetzungsverlauf",
            historyDescription: "Frühere Übersetzungen anzeigen.",
            translationCount: "Übersetzungen",
            delete: "Löschen",
            emptyHistory: "Kein Verlauf",

            accountSettings: "KONTOEINSTELLUNGEN",
            accountTitle: "Kontoinformationen",
            accountDescription: "Persönliche Daten und Konto verwalten.",
            personalInfo: "PERSÖNLICHE INFORMATIONEN",
            fullName: "Vollständiger Name",
            email: "E-Mail",
            accountStatus: "Kontostatus",
            active: "Aktiv",
            editInformation: "Informationen bearbeiten",
            logout: "Abmelden",

            loginLabel: "ANMELDUNG",
            loginTitle: "Anmelden",
            google: "Mit Google fortfahren",
            apple: "Mit Apple fortfahren",
            phone: "Mit Telefon fortfahren",
            or: "oder",
            noAccount: "Noch kein Konto?",
            createAccount: "Konto erstellen",
            continue: "Weiter",
            back: "Zurück",

            registerLabel: "KONTO ERSTELLEN",
            registerTitle: "Registrieren",
            registerDescription: "Erstellen Sie ein Transense AI Demo-Konto.",
            password: "Passwort",
            confirmPassword: "Passwort bestätigen",
            registerButton: "Konto erstellen",
            alreadyAccount: "Bereits ein Konto?",
            signIn: "Anmelden",
            terms: "Ich stimme den Nutzungsbedingungen zu",
            weak: "Schwach",
            medium: "Mittel",
            good: "Gut",
            strong: "Stark",
            notEntered: "Kein Passwort eingegeben",
            minimum: "Mindestens 8 Zeichen",

            accountCreateChip: "Transense AI Konto erstellen",
            registerHero1: "Starten Sie mit einer",
            registerHero2: "intelligenteren Übersetzung.",
            contextTranslation: "Kontextübersetzung",
            saveHistory: "Übersetzungsverlauf speichern",
            pronunciationAudio: "Aussprache & Audio",
            threeSteps: "IN 3 SCHRITTEN STARTEN",
            stepCreate: "Konto erstellen",
            stepLogin: "Anmelden",
            stepTranslate: "Übersetzen",

            aboutLabel: "PROJEKTINFORMATIONEN",
            aboutTitle: "Projekt 1 Einführung",
            practicalContext: "Praktischer Kontext",
            objectives: "Projektziele",
            scope: "Projektumfang",
            theory: "Theoretische Grundlage",
            technology: "Technologien",
            workflow: "Systemablauf",
            teacher: "Betreuer",
            members: "Teammitglieder"

        },


        /* =====================================================
           ITALIAN
        ====================================================== */

        it: {

            navTranslate: "Traduci",
            navHistory: "Cronologia",
            navAccount: "Account",
            navAbout: "Informazioni",
            navLogin: "Accedi",

            heroBadge: "Traduzione multilingue contestuale",
            heroTitle1: "Inglese – Vietnamita",
            heroTitle2: "Nel giusto contesto",
            heroDescription:
                "Transense AI si concentra sull’inglese e sperimenta altre 12 lingue, pronuncia, input vocale e analisi contestuale.",

            sourceLanguage: "Inglese",
            targetLanguage: "Vietnamita",
            workspaceLabel: "AREA DI TRADUZIONE MULTILINGUE",
            workspaceTitle: "Traduzione contestuale",
            workspaceDescription:
                "Scegli la lingua sorgente, inserisci o pronuncia il contenuto e traducilo in vietnamita.",
            apiReady: "API pronta",
            sourceText: "TESTO ORIGINALE",
            aiResult: "RISULTATO IA",
            clear: "Cancella",
            copy: "Copia",
            sample: "Esempio",
            translate: "Traduci con IA",
            translating: "Analisi del contesto...",
            resultWaiting: "La traduzione apparirà qui",
            resultInstruction: "Inserisci contenuto e seleziona Traduci con IA.",
            pronunciation: "PRONUNCIA",

            historyLabel: "CRONOLOGIA TRADUZIONI",
            historyTitle: "Cronologia traduzioni",
            historyDescription: "Rivedi le traduzioni precedenti.",
            translationCount: "traduzioni",
            delete: "Elimina",
            emptyHistory: "Nessuna cronologia",

            accountSettings: "IMPOSTAZIONI ACCOUNT",
            accountTitle: "Informazioni account",
            accountDescription: "Gestisci le informazioni personali.",
            personalInfo: "INFORMAZIONI PERSONALI",
            fullName: "Nome completo",
            email: "Email",
            accountStatus: "Stato account",
            active: "Attivo",
            editInformation: "Modifica informazioni",
            logout: "Esci",

            loginLabel: "ACCESSO ACCOUNT",
            loginTitle: "Accedi",
            google: "Continua con Google",
            apple: "Continua con Apple",
            phone: "Continua con telefono",
            or: "oppure",
            noAccount: "Non hai un account?",
            createAccount: "Crea account",
            continue: "Continua",
            back: "Indietro",

            registerLabel: "CREA ACCOUNT",
            registerTitle: "Registrati",
            registerDescription: "Crea un account demo Transense AI.",
            password: "Password",
            confirmPassword: "Conferma password",
            registerButton: "Crea account",
            alreadyAccount: "Hai già un account?",
            signIn: "Accedi",
            terms: "Accetto i termini di utilizzo",
            weak: "Debole",
            medium: "Media",
            good: "Buona",
            strong: "Forte",
            notEntered: "Password non inserita",
            minimum: "Minimo 8 caratteri",

            accountCreateChip: "Crea account Transense AI",
            registerHero1: "Inizia con una",
            registerHero2: "esperienza di traduzione più intelligente.",
            contextTranslation: "Traduzione contestuale",
            saveHistory: "Salva cronologia",
            pronunciationAudio: "Pronuncia e audio",
            threeSteps: "INIZIA IN 3 PASSAGGI",
            stepCreate: "Crea account",
            stepLogin: "Accedi",
            stepTranslate: "Inizia a tradurre",

            aboutLabel: "INFORMAZIONI PROGETTO",
            aboutTitle: "Introduzione Progetto 1",
            practicalContext: "Contesto pratico",
            objectives: "Obiettivi",
            scope: "Ambito",
            theory: "Fondamenti teorici",
            technology: "Tecnologie",
            workflow: "Flusso del sistema",
            teacher: "Docente",
            members: "Membri"

        },


        /* =====================================================
           RUSSIAN
        ====================================================== */

        ru: {

            navTranslate: "Перевод",
            navHistory: "История",
            navAccount: "Аккаунт",
            navAbout: "О проекте",
            navLogin: "Войти",

            heroBadge: "Многоязычный контекстный перевод",
            heroTitle1: "Английский – Вьетнамский",
            heroTitle2: "С учетом контекста",
            heroDescription:
                "Transense AI исследует перевод с английского и экспериментально поддерживает ещё 12 языков, произношение, голосовой ввод и анализ контекста.",

            sourceLanguage: "Английский",
            targetLanguage: "Вьетнамский",
            workspaceLabel: "МНОГОЯЗЫЧНЫЙ ПЕРЕВОД",
            workspaceTitle: "Контекстный перевод",
            workspaceDescription:
                "Выберите исходный язык, введите или произнесите текст и переведите его на вьетнамский.",
            apiReady: "API готов",
            sourceText: "ИСХОДНЫЙ ТЕКСТ",
            aiResult: "РЕЗУЛЬТАТ ИИ",
            clear: "Очистить",
            copy: "Копировать",
            sample: "Пример",
            translate: "Перевести с ИИ",
            translating: "Анализ контекста...",
            resultWaiting: "Перевод появится здесь",
            resultInstruction: "Введите текст и выберите перевод с ИИ.",
            pronunciation: "ПРОИЗНОШЕНИЕ",

            historyLabel: "ИСТОРИЯ ПЕРЕВОДОВ",
            historyTitle: "История переводов",
            historyDescription: "Просмотрите предыдущие переводы.",
            translationCount: "переводов",
            delete: "Удалить",
            emptyHistory: "Истории пока нет",

            accountSettings: "НАСТРОЙКИ АККАУНТА",
            accountTitle: "Информация аккаунта",
            accountDescription: "Управляйте личной информацией.",
            personalInfo: "ЛИЧНАЯ ИНФОРМАЦИЯ",
            fullName: "Полное имя",
            email: "Email",
            accountStatus: "Статус аккаунта",
            active: "Активен",
            editInformation: "Редактировать",
            logout: "Выйти",

            loginLabel: "ВХОД В АККАУНТ",
            loginTitle: "Войти",
            google: "Продолжить с Google",
            apple: "Продолжить с Apple",
            phone: "Продолжить по телефону",
            or: "или",
            noAccount: "Нет аккаунта?",
            createAccount: "Создать аккаунт",
            continue: "Продолжить",
            back: "Назад",

            registerLabel: "СОЗДАТЬ АККАУНТ",
            registerTitle: "Регистрация",
            registerDescription: "Создайте демо-аккаунт Transense AI.",
            password: "Пароль",
            confirmPassword: "Подтвердите пароль",
            registerButton: "Создать аккаунт",
            alreadyAccount: "Уже есть аккаунт?",
            signIn: "Войти",
            terms: "Я принимаю условия использования",
            weak: "Слабый",
            medium: "Средний",
            good: "Хороший",
            strong: "Сильный",
            notEntered: "Пароль не введён",
            minimum: "Минимум 8 символов",

            accountCreateChip: "Создать аккаунт Transense AI",
            registerHero1: "Начните с",
            registerHero2: "более умного перевода.",
            contextTranslation: "Контекстный перевод",
            saveHistory: "Сохранение истории",
            pronunciationAudio: "Произношение и звук",
            threeSteps: "НАЧНИТЕ ЗА 3 ШАГА",
            stepCreate: "Создать аккаунт",
            stepLogin: "Войти",
            stepTranslate: "Начать перевод",

            aboutLabel: "ИНФОРМАЦИЯ О ПРОЕКТЕ",
            aboutTitle: "Проект 1",
            practicalContext: "Практический контекст",
            objectives: "Цели проекта",
            scope: "Область проекта",
            theory: "Теоретическая основа",
            technology: "Технологии",
            workflow: "Работа системы",
            teacher: "Руководитель",
            members: "Участники"

        },


        /* =====================================================
           THAI
        ====================================================== */

        th: {

            navTranslate: "แปลภาษา",
            navHistory: "ประวัติ",
            navAccount: "บัญชี",
            navAbout: "เกี่ยวกับ",
            navLogin: "เข้าสู่ระบบ",

            heroBadge: "การแปลหลายภาษาตามบริบท",
            heroTitle1: "อังกฤษ – เวียดนาม",
            heroTitle2: "ตามบริบทที่ถูกต้อง",
            heroDescription:
                "Transense AI เน้นการวิจัยภาษาอังกฤษและทดลองรองรับอีก 12 ภาษา การออกเสียง การป้อนด้วยเสียง และการวิเคราะห์บริบท",

            sourceLanguage: "อังกฤษ",
            targetLanguage: "เวียดนาม",
            workspaceLabel: "พื้นที่แปลหลายภาษา",
            workspaceTitle: "แปลตามบริบท",
            workspaceDescription:
                "เลือกภาษาต้นทาง กรอกหรือพูดเนื้อหา แล้วแปลเป็นภาษาเวียดนาม",
            apiReady: "พร้อมเชื่อมต่อ API",
            sourceText: "ข้อความต้นฉบับ",
            aiResult: "ผลลัพธ์ AI",
            clear: "ล้าง",
            copy: "คัดลอก",
            sample: "ตัวอย่าง",
            translate: "แปลด้วย AI",
            translating: "กำลังวิเคราะห์บริบท...",
            resultWaiting: "คำแปลจะแสดงที่นี่",
            resultInstruction: "กรอกข้อความและเลือกแปลด้วย AI",
            pronunciation: "การออกเสียง",

            historyLabel: "ประวัติการแปล",
            historyTitle: "ประวัติการแปล",
            historyDescription: "ดูคำแปลก่อนหน้า",
            translationCount: "รายการ",
            delete: "ลบ",
            emptyHistory: "ยังไม่มีประวัติ",

            accountSettings: "ตั้งค่าบัญชี",
            accountTitle: "ข้อมูลบัญชี",
            accountDescription: "จัดการข้อมูลส่วนตัวและบัญชี",
            personalInfo: "ข้อมูลส่วนตัว",
            fullName: "ชื่อ",
            email: "อีเมล",
            accountStatus: "สถานะบัญชี",
            active: "ใช้งานอยู่",
            editInformation: "แก้ไขข้อมูล",
            logout: "ออกจากระบบ",

            loginLabel: "เข้าสู่ระบบบัญชี",
            loginTitle: "เข้าสู่ระบบ",
            google: "ดำเนินการต่อด้วย Google",
            apple: "ดำเนินการต่อด้วย Apple",
            phone: "ดำเนินการต่อด้วยโทรศัพท์",
            or: "หรือ",
            noAccount: "ยังไม่มีบัญชี?",
            createAccount: "สร้างบัญชี",
            continue: "ดำเนินการต่อ",
            back: "กลับ",

            registerLabel: "สร้างบัญชี",
            registerTitle: "สมัครสมาชิก",
            registerDescription: "สร้างบัญชีทดลอง Transense AI",
            password: "รหัสผ่าน",
            confirmPassword: "ยืนยันรหัสผ่าน",
            registerButton: "สร้างบัญชี",
            alreadyAccount: "มีบัญชีแล้ว?",
            signIn: "เข้าสู่ระบบ",
            terms: "ฉันยอมรับข้อกำหนดการใช้งาน",
            weak: "อ่อน",
            medium: "ปานกลาง",
            good: "ดี",
            strong: "แข็งแรง",
            notEntered: "ยังไม่ได้กรอกรหัสผ่าน",
            minimum: "อย่างน้อย 8 ตัวอักษร",

            accountCreateChip: "สร้างบัญชี Transense AI",
            registerHero1: "เริ่มต้นด้วย",
            registerHero2: "ประสบการณ์แปลที่ชาญฉลาดกว่า",
            contextTranslation: "แปลตามบริบท",
            saveHistory: "บันทึกประวัติการแปล",
            pronunciationAudio: "การออกเสียงและเสียง",
            threeSteps: "เริ่มต้นใน 3 ขั้นตอน",
            stepCreate: "สร้างบัญชี",
            stepLogin: "เข้าสู่ระบบ",
            stepTranslate: "เริ่มแปล",

            aboutLabel: "ข้อมูลโครงการ",
            aboutTitle: "แนะนำโครงการ 1",
            practicalContext: "บริบทการใช้งานจริง",
            objectives: "วัตถุประสงค์",
            scope: "ขอบเขตโครงการ",
            theory: "พื้นฐานทฤษฎี",
            technology: "เทคโนโลยี",
            workflow: "การทำงานของระบบ",
            teacher: "อาจารย์",
            members: "สมาชิก"

        },


        /* =====================================================
           CZECH
        ====================================================== */

        cs: {

            navTranslate: "Překlad",
            navHistory: "Historie",
            navAccount: "Účet",
            navAbout: "O projektu",
            navLogin: "Přihlásit",

            heroBadge: "Vícejazyčný kontextový překlad",
            heroTitle1: "Angličtina – Vietnamština",
            heroTitle2: "Ve správném kontextu",
            heroDescription:
                "Transense AI se zaměřuje na angličtinu a experimentálně podporuje dalších 12 jazyků, výslovnost, hlasový vstup a analýzu kontextu.",

            sourceLanguage: "Angličtina",
            targetLanguage: "Vietnamština",
            workspaceLabel: "VÍCEJAZYČNÝ PŘEKLAD",
            workspaceTitle: "Překlad podle kontextu",
            workspaceDescription:
                "Vyberte zdrojový jazyk, zadejte nebo nadiktujte obsah a přeložte jej do vietnamštiny.",
            apiReady: "API připraveno",
            sourceText: "ZDROJOVÝ TEXT",
            aiResult: "VÝSLEDEK AI",
            clear: "Vymazat",
            copy: "Kopírovat",
            sample: "Příklad",
            translate: "Přeložit pomocí AI",
            translating: "Analýza kontextu...",
            resultWaiting: "Překlad se zobrazí zde",
            resultInstruction: "Zadejte text a vyberte překlad pomocí AI.",
            pronunciation: "VÝSLOVNOST",

            historyLabel: "HISTORIE PŘEKLADŮ",
            historyTitle: "Historie překladů",
            historyDescription: "Prohlédněte si předchozí překlady.",
            translationCount: "překladů",
            delete: "Smazat",
            emptyHistory: "Žádná historie",

            accountSettings: "NASTAVENÍ ÚČTU",
            accountTitle: "Informace o účtu",
            accountDescription: "Správa osobních údajů a účtu.",
            personalInfo: "OSOBNÍ ÚDAJE",
            fullName: "Celé jméno",
            email: "E-mail",
            accountStatus: "Stav účtu",
            active: "Aktivní",
            editInformation: "Upravit údaje",
            logout: "Odhlásit",

            loginLabel: "PŘIHLÁŠENÍ",
            loginTitle: "Přihlásit se",
            google: "Pokračovat přes Google",
            apple: "Pokračovat přes Apple",
            phone: "Pokračovat telefonem",
            or: "nebo",
            noAccount: "Nemáte účet?",
            createAccount: "Vytvořit účet",
            continue: "Pokračovat",
            back: "Zpět",

            registerLabel: "VYTVOŘIT ÚČET",
            registerTitle: "Registrace",
            registerDescription: "Vytvořte demo účet Transense AI.",
            password: "Heslo",
            confirmPassword: "Potvrdit heslo",
            registerButton: "Vytvořit účet",
            alreadyAccount: "Máte již účet?",
            signIn: "Přihlásit",
            terms: "Souhlasím s podmínkami použití",
            weak: "Slabé",
            medium: "Střední",
            good: "Dobré",
            strong: "Silné",
            notEntered: "Heslo nebylo zadáno",
            minimum: "Alespoň 8 znaků",

            accountCreateChip: "Vytvořit účet Transense AI",
            registerHero1: "Začněte s",
            registerHero2: "chytřejším překladem.",
            contextTranslation: "Kontextový překlad",
            saveHistory: "Ukládání historie",
            pronunciationAudio: "Výslovnost a zvuk",
            threeSteps: "ZAČNĚTE VE 3 KROCÍCH",
            stepCreate: "Vytvořit účet",
            stepLogin: "Přihlásit",
            stepTranslate: "Začít překládat",

            aboutLabel: "INFORMACE O PROJEKTU",
            aboutTitle: "Představení projektu 1",
            practicalContext: "Praktický kontext",
            objectives: "Cíle projektu",
            scope: "Rozsah projektu",
            theory: "Teoretický základ",
            technology: "Technologie",
            workflow: "Fungování systému",
            teacher: "Vedoucí",
            members: "Členové"

        }

    };


    /* =========================================================
       TEXT MAP
       Từ tiếng Việt hiện tại -> key
    ========================================================= */

    const TEXT_MAP = {

        "Trang dịch": "navTranslate",
        "Lịch sử": "navHistory",
        "Tài khoản": "navAccount",
        "Giới thiệu": "navAbout",
        "Đăng Nhập": "navLogin",
        "Đăng nhập": "signIn",

        "Multilingual Context-aware Translation":
            "heroBadge",

        "Dịch Anh – Việt":
            "heroTitle1",

        "Dịch Anh - Việt":
            "heroTitle1",

        "Theo Đúng Ngữ Cảnh":
            "heroTitle2",

        "Theo Đúng Ngữ Cảnh.":
            "heroTitle2",

        "Tiếng Anh":
            "sourceLanguage",

        "Tiếng Việt":
            "targetLanguage",

        "MULTILINGUAL TRANSLATION WORKSPACE":
            "workspaceLabel",

        "Dịch Văn Bản Theo Ngữ Cảnh":
            "workspaceTitle",

        "Sẵn sàng kết nối API":
            "apiReady",

        "VĂN BẢN NGUỒN":
            "sourceText",

        "KẾT QUẢ AI":
            "aiResult",

        "Xóa":
            "clear",

        "Sao chép":
            "copy",

        "Câu mẫu":
            "sample",

        "Dịch bằng AI":
            "translate",

        "Đang phân tích ngữ cảnh...":
            "translating",

        "Bản dịch sẽ hiển thị tại đây":
            "resultWaiting",

        "PHIÊN ÂM / CÁCH ĐỌC":
            "pronunciation",

        "TRANSLATION HISTORY":
            "historyLabel",

        "Lịch Sử Dịch":
            "historyTitle",

        "Xem lại các nội dung bạn đã dịch bằng Transense AI.":
            "historyDescription",

        "Chưa có lịch sử dịch":
            "emptyHistory",

        "ACCOUNT SETTINGS":
            "accountSettings",

        "Thông Tin Tài Khoản":
            "accountTitle",

        "THÔNG TIN CÁ NHÂN":
            "personalInfo",

        "Họ và tên":
            "fullName",

        "Email":
            "email",

        "Trạng thái tài khoản":
            "accountStatus",

        "Đang hoạt động":
            "active",

        "Chỉnh sửa thông tin":
            "editInformation",

        "Đăng xuất":
            "logout",

        "ĐĂNG NHẬP TÀI KHOẢN":
            "loginLabel",

        "Tiếp tục với Google":
            "google",

        "Tiếp tục với Apple":
            "apple",

        "Tiếp tục với Điện thoại":
            "phone",

        "hoặc":
            "or",

        "Chưa có tài khoản?":
            "noAccount",

        "Tạo tài khoản":
            "createAccount",

        "Tiếp tục":
            "continue",

        "Quay lại":
            "back",

        "TẠO TÀI KHOẢN":
            "registerLabel",

        "Đăng Ký":
            "registerTitle",

        "Mật khẩu":
            "password",

        "Xác nhận mật khẩu":
            "confirmPassword",

        "Đã có tài khoản?":
            "alreadyAccount",

        "Yếu":
            "weak",

        "Trung bình":
            "medium",

        "Tốt":
            "good",

        "Mạnh":
            "strong",

        "Chưa nhập mật khẩu":
            "notEntered",

        "Tối thiểu 8 ký tự":
            "minimum",

        "Tạo tài khoản Transense AI":
            "accountCreateChip",

        "Bắt đầu với một trải nghiệm":
            "registerHero1",

        "dịch thông minh hơn.":
            "registerHero2",

        "Dịch theo ngữ cảnh":
            "contextTranslation",

        "Lưu lịch sử bản dịch":
            "saveHistory",

        "Phiên âm & phát âm":
            "pronunciationAudio",

        "BẮT ĐẦU CHỈ VỚI 3 BƯỚC":
            "threeSteps",

        "Bắt đầu dịch":
            "stepTranslate",

        "PROJECT INFORMATION":
            "aboutLabel",

        "Giới Thiệu Đồ Án 1":
            "aboutTitle",

        "Bối Cảnh Thực Tiễn":
            "practicalContext",

        "Mục Tiêu Đề Tài":
            "objectives",

        "Phạm Vi Đề Tài":
            "scope",

        "Cơ Sở Lý Thuyết":
            "theory",

        "Công Nghệ Sử Dụng":
            "technology",

        "Định Hướng Hoạt Động":
            "workflow",

        "Thông Tin Giảng Viên":
            "teacher",

        "Thành Viên Nhóm":
            "members"

    };


    /* =========================================================
       PLACEHOLDER TRANSLATIONS
    ========================================================= */

    const PLACEHOLDERS = {

        vi: {

            name:
                "Nhập họ và tên",

            email:
                "Nhập email",

            password:
                "Ít nhất 8 ký tự",

            confirm:
                "Nhập lại mật khẩu",

            source:
                "Nhập nội dung cần dịch..."

        },

        en: {

            name:
                "Enter your full name",

            email:
                "Enter email",

            password:
                "At least 8 characters",

            confirm:
                "Confirm password",

            source:
                "Enter text to translate..."

        },

        zh: {

            name:
                "输入姓名",

            email:
                "输入电子邮箱",

            password:
                "至少 8 个字符",

            confirm:
                "再次输入密码",

            source:
                "输入要翻译的内容..."

        },

        ja: {

            name:
                "氏名を入力",

            email:
                "メールアドレスを入力",

            password:
                "8文字以上",

            confirm:
                "パスワードを再入力",

            source:
                "翻訳する内容を入力..."

        },

        ko: {

            name:
                "이름 입력",

            email:
                "이메일 입력",

            password:
                "최소 8자",

            confirm:
                "비밀번호 확인",

            source:
                "번역할 내용을 입력하세요..."

        },

        fr: {

            name:
                "Entrez votre nom",

            email:
                "Entrez votre e-mail",

            password:
                "Au moins 8 caractères",

            confirm:
                "Confirmez le mot de passe",

            source:
                "Entrez le texte à traduire..."

        },

        es: {

            name:
                "Introduce tu nombre",

            email:
                "Introduce el correo",

            password:
                "Al menos 8 caracteres",

            confirm:
                "Confirma la contraseña",

            source:
                "Introduce el texto..."

        },

        de: {

            name:
                "Vollständigen Namen eingeben",

            email:
                "E-Mail eingeben",

            password:
                "Mindestens 8 Zeichen",

            confirm:
                "Passwort bestätigen",

            source:
                "Text zum Übersetzen eingeben..."

        },

        it: {

            name:
                "Inserisci nome completo",

            email:
                "Inserisci email",

            password:
                "Almeno 8 caratteri",

            confirm:
                "Conferma password",

            source:
                "Inserisci testo da tradurre..."

        },

        ru: {

            name:
                "Введите полное имя",

            email:
                "Введите email",

            password:
                "Минимум 8 символов",

            confirm:
                "Подтвердите пароль",

            source:
                "Введите текст для перевода..."

        },

        th: {

            name:
                "กรอกชื่อ",

            email:
                "กรอกอีเมล",

            password:
                "อย่างน้อย 8 ตัวอักษร",

            confirm:
                "ยืนยันรหัสผ่าน",

            source:
                "กรอกข้อความที่ต้องการแปล..."

        },

        cs: {

            name:
                "Zadejte celé jméno",

            email:
                "Zadejte e-mail",

            password:
                "Alespoň 8 znaků",

            confirm:
                "Potvrďte heslo",

            source:
                "Zadejte text k překladu..."

        }

    };



    const EXTRA_TRANSLATIONS = {
      "PERSONAL INFORMATION":"Personal information", "Thông Tin Cá Nhân":"Personal information",
      "Họ và tên":"Full name", "Trạng thái tài khoản":"Account status", "Loại tài khoản":"Account type",
      "Phương thức đăng nhập":"Login method", "Đang hoạt động":"Active", "Tài khoản đang hoạt động":"Account active",
      "Chỉnh sửa hồ sơ":"Edit profile", "Tổng bản dịch":"Total translations", "TỔNG BẢN DỊCH":"TOTAL TRANSLATIONS",
      "HÔM NAY":"TODAY", "NGÔN NGỮ":"LANGUAGES", "PHIÊN BẢN":"VERSION",
      "Hoạt động dịch trong ngày":"Translations today", "Bản dịch đã được lưu":"Saved translations",
      "Cặp ngôn ngữ nghiên cứu chính":"Main language pair", "Prototype Đồ án 1":"Project 1 prototype",
      "Thông Tin Tài Khoản":"Account information", "Hoạt Động Gần Đây":"Recent activity", "Xem tất cả":"View all",
      "Thông báo":"Notifications", "Trợ giúp & hỗ trợ":"Help & support", "Cài đặt":"Settings",
      "Thiết kế sau":"Coming later", "Sắp ra mắt":"Coming soon", "Đăng xuất":"Sign out",
      "Chế độ:":"Mode:", "Tối":"Dark", "Sáng":"Light",
      "Dịch thuật hỗ trợ bởi AI":"AI-powered translation",
      "Dịch chính xác hơn khi hiểu đúng ngữ cảnh.":"Translate more accurately with the right context.",
      "Transense AI phân tích từ khóa, từ đa nghĩa và nội dung xung quanh để lựa chọn nghĩa phù hợp, thay vì chỉ dịch từng từ riêng lẻ.":"Transense AI analyzes keywords, ambiguous words, and surrounding content to select the appropriate meaning rather than translating word by word.",
      "Lịch sử bản dịch":"Translation history", "Dịch theo ngữ cảnh":"Context-aware translation",
      "Phiên âm & phát âm":"Pronunciation & audio", "Đăng Nhập":"Sign in", "Đăng Ký":"Sign up",
      "Tạo tài khoản":"Create account", "Chưa có tài khoản?":"Don't have an account?",
      "Đã có tài khoản?":"Already have an account?", "Quay lại":"Back", "Tiếp tục":"Continue",
      "Mật khẩu":"Password", "Xác nhận mật khẩu":"Confirm password",
      "Từ khóa ngữ cảnh":"Context keywords", "TỪ KHÓA NGỮ CẢNH":"CONTEXT KEYWORDS",
      "AI XÁC ĐỊNH":"AI DETECTED", "Ngữ cảnh tài chính":"Financial context",
      "Dịch dựa trên ngữ cảnh":"Context-based translation", "Sử dụng các chức năng dịch.":"Use translation features.",
      "Nhập thông tin cơ bản.":"Enter basic information.", "Truy cập hệ thống dịch.":"Access the translation workspace.",
      "Đang phát triển":"In development", "Phiên demo":"Demo session"
    };
    const EXTRA_REVERSE = Object.fromEntries(Object.entries(EXTRA_TRANSLATIONS).map(([vi,en])=>[en,vi]));

    /* =========================================================
       CURRENT LANGUAGE
    ========================================================= */

    // Auto-detect browser/device language. Unknown locales fall back to English.
    const deviceLanguage = (navigator.languages?.[0] || navigator.language || "en")
        .toLowerCase().split("-")[0];

    let currentLanguage = Object.prototype.hasOwnProperty.call(translations, deviceLanguage)
        ? deviceLanguage
        : "en";


    /* =========================================================
       HELPERS
    ========================================================= */

    function normalizeText(
        value
    ) {

        return String(
            value || ""
        )
            .replace(
                /\s+/g,
                " "
            )
            .trim();

    }


    function getDictionary() {

        return (
            translations[
                currentLanguage
            ]
            ||
            translations.vi
        );

    }


    function getLanguageData() {

        return (
            LANGUAGES.find(
                function (
                    item
                ) {

                    return (
                        item.code ===
                        currentLanguage
                    );

                }
            )
            ||
            LANGUAGES[0]
        );

    }


    /* =========================================================
       FIND TRANSLATION KEY

       Cho phép đổi:
       VI -> EN -> IT -> FR -> VI...
    ========================================================= */

    function findTranslationKey(
        text
    ) {

        const normalized =
            normalizeText(
                text
            );


        if (!normalized) {

            return null;

        }


        /*
            Map tiếng Việt gốc.
        */

        if (
            TEXT_MAP[
                normalized
            ]
        ) {

            return (
                TEXT_MAP[
                    normalized
                ]
            );

        }


        /*
            Tìm trong tất cả bản dịch.
            Nhờ vậy đổi ngôn ngữ nhiều lần
            vẫn nhận ra nội dung hiện tại.
        */

        for (
            const languageCode
            of Object.keys(
                translations
            )
        ) {

            const dictionary =
                translations[
                    languageCode
                ];


            for (
                const key
                of Object.keys(
                    dictionary
                )
            ) {

                if (
                    normalizeText(
                        dictionary[
                            key
                        ]
                    )
                    ===
                    normalized
                ) {

                    return key;

                }

            }

        }


        return null;

    }


    /* =========================================================
       INJECT CSS
    ========================================================= */

    function injectLanguageStyles() {

        if (
            document.getElementById(
                "transense-language-css"
            )
        ) {

            return;

        }


        const style =
            document.createElement(
                "style"
            );


        style.id =
            "transense-language-css";


        style.textContent =
        `

        .ts-language-switcher {
            position: fixed;

            right: 26px;
            bottom: 22px;

            z-index: 99999;

            font-family: inherit;
        }


        .ts-language-main {
            min-width: 130px;
            height: 43px;

            display: flex;
            align-items: center;
            justify-content: center;

            gap: 8px;

            padding:
                0 13px;

            border:
                1px solid
                rgba(148, 163, 184, 0.25);

            border-radius: 13px;

            background:
                rgba(17, 17, 17, 0.96);

            color: #ffffff;

            font-family: inherit;

            font-size: 11px;
            font-weight: 600;

            cursor: pointer;

            box-shadow:
                0 12px 35px
                rgba(0, 0, 0, 0.25);

            backdrop-filter:
                blur(16px);

            transition:
                border-color .18s ease,
                transform .18s ease;
        }


        .ts-language-main:hover {
            transform:
                translateY(-1px);

            border-color:
                rgba(59, 130, 246, 0.60);
        }


        .ts-language-globe {
            color: #38bdf8;

            font-size: 14px;
        }


        .ts-language-code {
            color: #cbd5e1;

            font-size: 10px;
            font-weight: 800;
        }


        .ts-language-current-name {
            white-space: nowrap;
        }


        .ts-language-chevron {
            margin-left: 2px;

            color: #94a3b8;

            font-size: 8px;

            transition:
                transform .18s ease;
        }


        .ts-language-switcher.open
        .ts-language-chevron {
            transform:
                rotate(180deg);
        }


        /* ==========================================
           MENU
        ========================================== */

        .ts-language-menu {
            position: absolute;

            right: 0;
            bottom:
                calc(100% + 10px);

            width: 250px;

            max-height: 450px;

            display: none;

            overflow-y: auto;

            padding: 8px;

            border:
                1px solid
                rgba(148, 163, 184, 0.18);

            border-radius: 15px;

            background:
                #101010;

            box-shadow:
                0 28px 70px
                rgba(0, 0, 0, 0.42);

            scrollbar-width: thin;

            scrollbar-color:
                #64748b
                transparent;
        }


        .ts-language-switcher.open
        .ts-language-menu {
            display: block;

            animation:
                tsLanguageOpen
                .16s ease;
        }


        @keyframes
        tsLanguageOpen {

            from {
                opacity: 0;

                transform:
                    translateY(7px)
                    scale(.98);
            }

            to {
                opacity: 1;

                transform:
                    translateY(0)
                    scale(1);
            }

        }


        .ts-language-menu::-webkit-scrollbar {
            width: 5px;
        }


        .ts-language-menu::-webkit-scrollbar-track {
            background: transparent;
        }


        .ts-language-menu::-webkit-scrollbar-thumb {
            background: #64748b;

            border-radius: 999px;
        }


        /* ==========================================
           OPTION
        ========================================== */

        .ts-language-option {
            width: 100%;
            height: 43px;

            display: grid;

            grid-template-columns:
                34px
                1fr
                24px;

            align-items: center;

            gap: 7px;

            padding:
                0 10px;

            border: none;

            border-radius: 9px;

            background:
                transparent;

            color: #ffffff;

            font-family: inherit;

            font-size: 11px;

            text-align: left;

            cursor: pointer;

            transition:
                background .15s ease,
                color .15s ease;
        }


        .ts-language-option:hover {
            background:
                rgba(255, 255, 255, 0.07);
        }


        .ts-language-option.active {
            background:
                rgba(59, 130, 246, 0.12);

            color: #60a5fa;
        }


        .ts-option-code {
            color: #ffffff;

            font-size: 10px;
            font-weight: 800;
        }


        .ts-language-option.active
        .ts-option-code {
            color: #60a5fa;
        }


        .ts-option-name {
            overflow: hidden;

            white-space: nowrap;

            text-overflow: ellipsis;
        }


        .ts-option-check {
            text-align: center;

            color: #3b82f6;

            font-weight: 800;
        }


        /* ==========================================
           MOBILE
        ========================================== */

        @media
        (max-width: 768px) {

            .ts-language-switcher {
                right: 12px;
                bottom: 12px;
            }


            .ts-language-main {
                min-width: 47px;
                width: 47px;
                height: 43px;

                padding: 0;
            }


            .ts-language-globe {
                display: none;
            }


            .ts-language-current-name {
                display: none;
            }


            .ts-language-code {
                font-size: 11px;
            }


            .ts-language-chevron {
                font-size: 7px;
            }


            .ts-language-menu {
                position: fixed;

                right: 12px;
                bottom: 64px;

                width:
                    min(
                        250px,
                        calc(100vw - 24px)
                    );

                max-height: 65vh;
            }

        }

        `;


        document.head.appendChild(
            style
        );

    }


    /* =========================================================
       CREATE SWITCHER
    ========================================================= */

    function createLanguageSwitcher() {

        if (
            document.getElementById(
                "transenseLanguageSwitcher"
            )
        ) {

            return;

        }


        const switcher =
            document.createElement(
                "div"
            );


        switcher.id =
            "transenseLanguageSwitcher";


        switcher.className =
            "ts-language-switcher";


        switcher.innerHTML =
        `

            <button
                type="button"
                class="ts-language-main"
                id="tsLanguageMain"
                aria-label="Change website language"
                aria-expanded="false"
            >

                <span class="ts-language-globe">
                    🌐
                </span>

                <span
                    class="ts-language-code"
                    id="tsCurrentLanguageCode"
                >
                    VN
                </span>

                <span
                    class="ts-language-current-name"
                    id="tsCurrentLanguageName"
                >
                    Tiếng Việt
                </span>

                <span class="ts-language-chevron">
                    ▲
                </span>

            </button>


            <div
                class="ts-language-menu"
                id="tsLanguageMenu"
            ></div>

        `;


        document.body.appendChild(
            switcher
        );


        renderLanguageMenu();


        updateLanguageButton();


        const mainButton =
            document.getElementById(
                "tsLanguageMain"
            );


        /*
            QUAN TRỌNG:
            Event listener này chỉ tạo 1 lần.
        */

        mainButton.addEventListener(
            "click",
            function (
                event
            ) {

                event.preventDefault();

                event.stopPropagation();


                const isOpen =
                    switcher.classList.toggle(
                        "open"
                    );


                mainButton.setAttribute(
                    "aria-expanded",
                    String(
                        isOpen
                    )
                );

            }
        );


        /*
            Click trong menu không được
            truyền ra document.
        */

        switcher.addEventListener(
            "click",
            function (
                event
            ) {

                event.stopPropagation();

            }
        );


        /*
            Click ra ngoài -> đóng menu.
        */

        document.addEventListener(
            "click",
            function () {

                closeLanguageMenu();

            }
        );


        /*
            ESC -> đóng.
        */

        document.addEventListener(
            "keydown",
            function (
                event
            ) {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeLanguageMenu();

                }

            }
        );

    }


    /* =========================================================
       CLOSE MENU
    ========================================================= */

    function closeLanguageMenu() {

        const switcher =
            document.getElementById(
                "transenseLanguageSwitcher"
            );


        const mainButton =
            document.getElementById(
                "tsLanguageMain"
            );


        if (switcher) {

            switcher.classList.remove(
                "open"
            );

        }


        if (mainButton) {

            mainButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }


    /* =========================================================
       RENDER MENU
       CHỈ TẠO MỘT LẦN
    ========================================================= */

    function renderLanguageMenu() {

        const menu =
            document.getElementById(
                "tsLanguageMenu"
            );


        if (!menu) {

            return;

        }


        /*
            Nếu menu đã có button
            thì KHÔNG tạo lại.
        */

        if (
            menu.children.length >
            0
        ) {

            updateActiveLanguage();

            return;

        }


        LANGUAGES.forEach(
            function (
                language
            ) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "ts-language-option";


                button.dataset.language =
                    language.code;


                button.innerHTML =
                `

                    <span class="ts-option-code">
                        ${language.flag}
                    </span>

                    <span class="ts-option-name">
                        ${language.name}
                    </span>

                    <span class="ts-option-check"></span>

                `;


                /*
                    Listener này cũng chỉ tạo 1 lần.
                */

                button.addEventListener(
                    "click",
                    function (
                        event
                    ) {

                        event.preventDefault();

                        event.stopPropagation();


                        changeLanguage(
                            language.code
                        );

                    }
                );


                menu.appendChild(
                    button
                );

            }
        );


        updateActiveLanguage();

    }


    /* =========================================================
       UPDATE ACTIVE OPTION
    ========================================================= */

    function updateActiveLanguage() {

        const options =
            document.querySelectorAll(
                ".ts-language-option"
            );


        options.forEach(
            function (
                option
            ) {

                const language =
                    option.dataset.language;


                const active =
                    language ===
                    currentLanguage;


                option.classList.toggle(
                    "active",
                    active
                );


                const check =
                    option.querySelector(
                        ".ts-option-check"
                    );


                if (check) {

                    check.textContent =
                        active
                            ? "✓"
                            : "";

                }

            }
        );

    }


    /* =========================================================
       UPDATE BUTTON
    ========================================================= */

    function updateLanguageButton() {

        const language =
            getLanguageData();


        const codeElement =
            document.getElementById(
                "tsCurrentLanguageCode"
            );


        const nameElement =
            document.getElementById(
                "tsCurrentLanguageName"
            );


        if (codeElement) {

            codeElement.textContent =
                language.flag;

        }


        if (nameElement) {

            nameElement.textContent =
                language.name;

        }


        updateActiveLanguage();

    }


    /* =========================================================
       TRANSLATE TEXT NODE
    ========================================================= */

    function translateTextNode(
        node
    ) {

        if (
            !node
            ||
            !node.parentElement
        ) {

            return;

        }


        const parent =
            node.parentElement;

        if (parent.closest('.hero-greetings, .hero-greeting, .hero-bg-text, .background-words')) return;


        /*
            KHÔNG dịch menu ngôn ngữ.
        */

        if (
            parent.closest(
                "#transenseLanguageSwitcher"
            )
        ) {

            return;

        }


        /*
            KHÔNG chạm vào các vùng code/input.
        */

        if (
            [
                "SCRIPT",
                "STYLE",
                "TEXTAREA",
                "OPTION",
                "CODE",
                "PRE"
            ].includes(
                parent.tagName
            )
        ) {

            return;

        }


        const original =
            node.nodeValue;


        const normalized =
            normalizeText(
                original
            );


        if (!normalized) {

            return;

        }


        /*
            Không dịch email,
            MSSV, số điện thoại...
        */

        if (
            normalized.includes(
                "@"
            )
        ) {

            return;

        }


        const key =
            findTranslationKey(
                normalized
            );


        if (!key) {
            const extraValue = (currentLanguage === "vi")
                ? (EXTRA_REVERSE[normalized] || normalized)
                : (EXTRA_TRANSLATIONS[normalized] || normalized);
            if (extraValue !== normalized) {
                const leading = original.match(/^\s*/)[0];
                const trailing = original.match(/\s*$/)[0];
                node.nodeValue = leading + extraValue + trailing;
            }
            return;
        }


        const dictionary =
            getDictionary();


        if (
            dictionary[
                key
            ] === undefined
        ) {

            return;

        }


        const leadingSpace =
            original.match(
                /^\s*/
            )[0];


        const trailingSpace =
            original.match(
                /\s*$/
            )[0];


        node.nodeValue =
            leadingSpace
            +
            dictionary[
                key
            ]
            +
            trailingSpace;

    }


    /* =========================================================
       TRANSLATE PAGE TEXT
    ========================================================= */

    function translatePageText() {

        const walker =
            document.createTreeWalker(

                document.body,

                NodeFilter.SHOW_TEXT

            );


        const nodes =
            [];


        while (
            walker.nextNode()
        ) {

            nodes.push(
                walker.currentNode
            );

        }


        nodes.forEach(
            translateTextNode
        );

    }


    /* =========================================================
       TRANSLATE PLACEHOLDERS
    ========================================================= */

    function translatePlaceholders() {

        const dictionary =
            PLACEHOLDERS[
                currentLanguage
            ]
            ||
            PLACEHOLDERS.vi;


        document
            .querySelectorAll(
                "input[placeholder], textarea[placeholder]"
            )
            .forEach(
                function (
                    input
                ) {

                    const value =
                        normalizeText(
                            input.placeholder
                        );


                    /*
                        NAME
                    */

                    if (
                        [
                            "Nhập họ và tên",
                            "Ví dụ: Nguyễn Minh Huy",
                            "Enter your full name",
                            "Nome completo",
                            "氏名を入力",
                            "输入姓名"
                        ].includes(
                            value
                        )
                    ) {

                        input.placeholder =
                            dictionary.name;

                        return;

                    }


                    /*
                        EMAIL
                    */

                    if (
                        value.toLowerCase()
                            .includes(
                                "email"
                            )
                        &&
                        !value.includes(
                            "@"
                        )
                    ) {

                        input.placeholder =
                            dictionary.email;

                        return;

                    }


                    /*
                        PASSWORD
                    */

                    if (
                        [
                            "Ít nhất 8 ký tự",
                            "At least 8 characters",
                            "Almeno 8 caratteri",
                            "至少 8 个字符",
                            "8文字以上"
                        ].includes(
                            value
                        )
                    ) {

                        input.placeholder =
                            dictionary.password;

                        return;

                    }


                    /*
                        CONFIRM PASSWORD
                    */

                    if (
                        [
                            "Nhập lại mật khẩu",
                            "Confirm password",
                            "Conferma password",
                            "再次输入密码",
                            "パスワードを再入力"
                        ].includes(
                            value
                        )
                    ) {

                        input.placeholder =
                            dictionary.confirm;

                        return;

                    }


                    /*
                        TRANSLATION TEXTAREA
                    */

                    if (
                        value.includes(
                            "dịch"
                        )
                        ||
                        value.includes(
                            "translate"
                        )
                    ) {

                        input.placeholder =
                            dictionary.source;

                    }

                }
            );

    }


    /* =========================================================
       TRANSLATE TITLE
    ========================================================= */

    function translateDocumentTitle() {

        const dictionary =
            getDictionary();


        const fileName =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase();


        if (
            fileName.includes(
                "register"
            )
        ) {

            document.title =
                dictionary.registerTitle
                +
                " - Transense AI";

        }
        else if (
            fileName.includes(
                "login"
            )
        ) {

            document.title =
                dictionary.loginTitle
                +
                " - Transense AI";

        }
        else if (
            fileName.includes(
                "history"
            )
        ) {

            document.title =
                dictionary.historyTitle
                +
                " - Transense AI";

        }
        else if (
            fileName.includes(
                "profile"
            )
        ) {

            document.title =
                dictionary.accountTitle
                +
                " - Transense AI";

        }
        else if (
            fileName.includes(
                "about"
            )
        ) {

            document.title =
                dictionary.aboutTitle
                +
                " - Transense AI";

        }
        else {

            document.title =
                "Transense AI";

        }

    }


    /* =========================================================
       EXTRA MICROCOPY
    ========================================================= */

    function applyExtraMicrocopy() {

        const isVi = currentLanguage === "vi";

        document.querySelectorAll('.menu-placeholder').forEach(function(item, index) {
            const small = item.querySelector('small');
            if (index === 0) {
                const label = item.querySelector('.menu-action-label');
                if (label) label.textContent = isVi ? 'Thông báo' : 'Notifications';
                if (small) small.textContent = isVi ? 'Sắp ra mắt' : 'Coming soon';
            }
            if (index === 1) {
                const label = item.querySelector('.menu-action-label');
                if (label) label.textContent = isVi ? 'Trợ giúp & hỗ trợ' : 'Help & support';
                if (small) small.textContent = isVi ? 'Sắp ra mắt' : 'Coming soon';
            }
            if (index === 2) {
                const label = item.querySelector('.menu-action-label');
                if (label) label.textContent = isVi ? 'Cài đặt' : 'Settings';
                if (small) small.textContent = isVi ? 'Thiết kế sau' : 'Design later';
            }
        });

        document.querySelectorAll('.model-soon').forEach(function(el) {
            el.textContent = isVi ? 'Sắp ra mắt' : 'Coming soon';
        });

        document.querySelectorAll('.ai-model-option small').forEach(function(el) {
            const strong = el.parentElement.querySelector('strong')?.textContent || '';
            if (strong.includes('Transense AI Core')) {
                el.textContent = isVi ? 'Chế độ mô phỏng mặc định dành cho prototype hiện tại.' : 'Default simulation mode for the current prototype.';
            } else {
                el.textContent = isVi ? 'Mô hình đang được chuẩn bị tích hợp cho các bản cập nhật tiếp theo.' : 'This model is being prepared for integration in upcoming updates.';
            }
        });
        /* Supplementary static UI strings shared across pages.
           Existing per-language keys still take priority; unknown locales default to English.
           Never translate actual user input or editable account values. */
        const uiPairs = [
            ["Thông tin tài khoản", "Account information"],
            ["Thông báo", "Notifications"],
            ["Trợ giúp & hỗ trợ", "Help & support"],
            ["Cài đặt", "Settings"],
            ["Chế độ:", "Theme:"],
            ["Tối", "Dark"],
            ["Sáng", "Light"],
            ["Đăng xuất", "Sign out"],
            ["Đăng nhập", "Sign in"],
            ["Sắp ra mắt", "Coming soon"],
            ["Thiết kế sau", "In design"],
            ["Tổng bản dịch", "Total translations"],
            ["Hôm nay", "Today"],
            ["Ngôn ngữ", "Languages"],
            ["Phiên bản", "Version"],
            ["Bản dịch đã được lưu", "Saved translations"],
            ["Hoạt động dịch trong ngày", "Translations today"],
            ["Cặp ngôn ngữ nghiên cứu chính", "Primary language pair"],
            ["Prototype Đồ án 1", "Project 1 prototype"],
            ["Thông Tin Cá Nhân", "Personal Information"],
            ["Họ và tên", "Full name"],
            ["Trạng thái tài khoản", "Account status"],
            ["Đang hoạt động", "Active"],
            ["Loại tài khoản", "Account type"],
            ["Phương thức đăng nhập", "Login method"],
            ["Hệ thống", "System"],
            ["Hoạt Động Gần Đây", "Recent activity"],
            ["Xem tất cả", "View all"],
            ["Chỉnh sửa hồ sơ", "Edit profile"],
            ["Tài khoản đang hoạt động", "Account active"],
            ["Dịch Văn Bản Theo Ngữ Cảnh", "Context-aware text translation"],
            ["Sẵn sàng kết nối API", "Ready to connect to API"],
            ["Sẵn sàng tạo bản dịch", "Ready to translate"],
            ["Chưa phân tích", "Not analyzed"],
            ["Chưa có dữ liệu", "No data yet"],
            ["Chọn AI dịch", "Choose translation AI"],
            ["Lưu", "Save"],
            ["Bỏ lưu", "Unsave"],
            ["Sao chép", "Copy"],
            ["Xóa", "Delete"],
            ["Lọc", "Filter"],
            ["Tìm kiếm", "Search"],
            ["Tổng lịch sử", "Total history"],
            ["Ghim", "Pinned"],
            ["Các câu dịch trước đó", "Previous translations"],
            ["Các câu đã lưu", "Saved translations"],
            ["Ngữ cảnh tài chính", "Financial context"],
            ["Giảng Viên Hướng Dẫn", "Supervisor"],
            ["Thành Viên Nhóm", "Team members"],
            ["Vai Trò Của Từng Công Nghệ", "How the technologies are used"],
            ["Tổng Quan Về Đề Tài", "Project overview"],
            ["Mục Tiêu Đề Tài", "Project objectives"],
            ["Lý Do Chọn Đề Tài", "Project motivation"],
            ["Phạm Vi Thực Hiện", "Project scope"],
            ["Tóm Lược Đề Tài", "Project summary"]
        ];
        const staticNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        while (staticNodes.nextNode()) {
            const node = staticNodes.currentNode;
            const parent = node.parentElement;
            if (!parent || parent.closest('script,style,textarea,input,[contenteditable],.hero-greetings,.hero-greeting,.profile-user-name,.profile-user-email,.info-value,.student-name,.student-id,.student-role,.member-name,.account-name,.ai-model-name')) continue;
            const original = node.__originalUiString || node.textContent.trim();
            const match = uiPairs.find(pair => pair.includes(original));
            if (!match) continue;
            node.__originalUiString = match[0];
            const padding = node.textContent.match(/^\s*/)?.[0] || '';
            const trailing = node.textContent.match(/\s*$/)?.[0] || '';
            node.textContent = padding + (isVi ? match[0] : match[1]) + trailing;
        }

    }

    /* =========================================================
       APPLY LANGUAGE
    ========================================================= */

    function applyLanguage() {

        document.documentElement.lang =
            currentLanguage;


        translatePageText();


        translatePlaceholders();


        translateDocumentTitle();


        updateLanguageButton();

        applyExtraMicrocopy();


        /*
            Cho JS khác biết ngôn ngữ đã đổi.
        */

        window.dispatchEvent(

            new CustomEvent(
                "transenseLanguageChanged",
                {

                    detail: {

                        language:
                            currentLanguage,

                        dictionary:
                            getDictionary()

                    }

                }
            )

        );

    }


    /* =========================================================
       CHANGE LANGUAGE
    ========================================================= */

    function changeLanguage(
        languageCode
    ) {

        if (
            !translations[
                languageCode
            ]
        ) {

            return;

        }


        /*
            Đổi biến hiện tại.
        */

        currentLanguage =
            languageCode;


        /*
            Lưu vào trình duyệt.
        */

        localStorage.setItem(
            "transenseWebsiteLanguage",
            currentLanguage
        );


        /*
            ĐÓNG MENU TRƯỚC.
        */

        closeLanguageMenu();


        /*
            Sau đó dịch trang.
        */

        applyLanguage();


        /*
            Update dấu ✓.
        */

        updateActiveLanguage();

    }


    /* =========================================================
       PUBLIC API

       Có thể dùng ở code khác:

       TransenseI18n.change("en");

       TransenseI18n.get("translate");
    ========================================================= */

    window.TransenseI18n = {

        get language() {

            return currentLanguage;

        },


        change:
            changeLanguage,


        apply:
            applyLanguage,


        get:
            function (
                key
            ) {

                const dictionary =
                    getDictionary();


                return (
                    dictionary[
                        key
                    ]
                    ||
                    translations.vi[
                        key
                    ]
                    ||
                    key
                );

            }

    };


    /* =========================================================
       START
    ========================================================= */

    function startI18n() {

        injectLanguageStyles();


        // Use the device language silently across all pages.
        // Do not show a floating language selector.


        applyLanguage();


        /*
            Chạy lại nhẹ sau khi page script
            tạo thêm nội dung.

            KHÔNG dùng MutationObserver liên tục
            nên không còn lỗi click menu.
        */

        setTimeout(
            function () {

                applyLanguage();

            },
            250
        );


        setTimeout(
            function () {

                applyLanguage();

            },
            800
        );

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            startI18n
        );

    }
    else {

        startI18n();

    }

})();