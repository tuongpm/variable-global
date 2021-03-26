var api_domain_ex  = 'https://ext.hongngochospital.vn';
var _TIME_SWITCH_WAITING_ = 15000;
var _BED_CATEGORY_ID_ = 94;
var ROLE_PERMISSION = "receptionist_admin"; //todo: quyen sieu admin
var ROLE_LETAN = "le_tan";
var ROLE_KIOS = "kiosk";
var _IS_PHARMA_ALL_ = 6;
var BRANCH_ID = 1700; //todo: chi nhanh ivf
var PATIENT_TYPE_ID = 15; //todo: doi tuong ivf
var WAREHOUSE_TOTAL_INTERNAL = 246; //todo: id kho tổng nội bộ
var TIME_LIMIT_CLS_SEND_SMS = 1800; //todo: thoi gian 30p hien thi nut sms o cls kham benh;
// var SERVICE_EAT_ID = [88889640, 7615]; // id dv ăn e
// var SERVICE_EAT_ID = [88889567, 7615]; // id dv ăn etest
var  ACTION_HISTORY_KSKCT_PATIENT = "company_contract_update_patient";
var PATIENT_AGE_CHILD = 15; //TODO:Số tuổi in để in vong tay y tế người lớn
var PATIENT_AGE_MOTHER = 10; //todo: Số tuổi để hiển thị thông tin con trên vòng tay y tế
var REASON_RECEPTION_ID_BOOKING = 1333; //todo: id ly do tiep nhan la dat hen
var APP_DOMAIN = 'https://e.hongngochospital.vn';
var LINK_DETAIL_VOUCHER = "/v2/memberships/detail-voucher";
var APP_TEMPLATE = 'hn';
var BRANCH_CODE_1 = 'YN';
var BRANCH_CODE_2 = 'KN';

var BRANCH_CODE_3 = 'SV';
var BRANCH_CODE_4 = 'KB';
var BRANCH_CODE_5 = 'HD';
var BRANCH_CODE_6 = 'NT';
var BRANCH_CODE_7 = 'TH1';
var BRANCH_CODE_8 = 'PTM';
var TIME_OUT_DO_NOT_OPERATE_KIOS = 300000;
var TIME_OUT_ERROR = 5000; //timeout lỗi pos
var PASS_LOGOUT_KIOS = "2222";
var ROLE_MAMA_QUE = "Ke_toan_special";
var FORM_ID_CHI_DINH = 11; //todo: form id của chỉ định -> cần khi tạo mẫu chỉ định
var PAYMENT_TYPE_CARD = 446;
var LIST_SURVIVAL = ['mach', 'nhip_tho', 'chieu_cao', 'nhiet_do', 'huyet_ap1', 'huyet_ap2', 'can_nang']; //todo: chỉ số sinh tồn
var SERVICE_ID_KE_TOA_KL = 8098;
var SERVICE_IDS_EDIT = [88890034,31409,31411]; //Những dịch vụ được sửa tên dịch vụ trên dịch vụ => Chỉ định dịch vụ
var SERVICE_CATEGORY_IDS_EDIT = [7,8]; //Những category được sửa tên dịch vụ trên dịch vụ => Chỉ định dịch vụ
var URL_CALL_ORDER = "https://payment-gate.hongngochospital.vn:4455"; // url gọi số lễ tân
var URL_SMEDIC = "https://smedix365.vn";
var LIST_ADVANCE_SEARCH = [
    {
        'id_search':0,
        'name_search': 'Ngày vào viện'
    },
    {
        'id_search':1,
        'name_search': 'Ngày ra viện'
    },
    {
        'id_search':4,
        'name_search': 'Năm sinh'
    },
    {
        'id_search':5,
        'name_search': 'Số điện thoại'
    },
    {
        'id_search':6,
        'name_search': 'Địa chỉ'
    },
    {
        'id_search':7,
        'name_search': 'Giới tính'
    },
    {
        'id_search':8,
        'name_search': 'Tình trạng'
    }
];
var LIST_SPLIT_INVOICE = [
    {
        index: 0,
        name: "bhtn",
        title: "HĐ BHTN",
        isSave: 0,
        listService: [],
        color: {'background-color': '#d9534f', color: 'white'},
        payment_type: {payment_type_id: 445, payment_type_code: "TTS", payment_type_name: "Thanh toán sau"}
    },
    {
        index: 1,
        name: "bhyt",
        title: "HĐ BHYT",
        isSave: 0,
        listService: [],
        color: {'background-color': '#5cb85c', color: 'white'},
        payment_type: {payment_type_id: 445, payment_type_code: "TTS", payment_type_name: "Thanh toán sau"},
        guarantor: [
            {_id: "178",
                insurance_id: 178,
                insurance_code: "bhyt",
                insurance_name: "BH Y tế",
                insurance_address: "Bảo hiểm xã hội Việt nam",
                insurance_phone: ".",
                insurance_email: ".",
                insurance_website: ".",
                insurance_logo_url: ".",
                note: ".",
                is_guarantor: "1",
                guarantor_id: "0",
                active: 1,
                is_del: null,
                insurance_category: null,
                is_confirm_import: 1
            }
        ]
        },
    {
        index: 2,
        name: "cash",
        title: "HĐ tiền mặt",
        isSave: 0,
        listService: [],
        color: {'background-color': '#337ab7', color: 'white'},
        payment_type: {payment_type_id: 443, payment_type_code: "TM", payment_type_name: "Tiền mặt"}
    }
];

var BHYT_ID = 178; //cấu hình id của bảo hiểm y tế

//Cấu hình dịch vụ sử dụng form ksk
var service_ids_KNOI = [7757,7788];
var service_ids_KNGOAI = [7766];
var service_ids_KSAN = [7763];
var service_ids_KMAT = [7765, 8117];
var service_ids_KTMH = [7768, 8112, 7396];
var service_ids_KRHM = [7764];
var service_ids_KDA = [7789];
// var SERVICE_ID_KHAM_MIENPHI = 8781;
var SERVICE_ID_KHAM_LAI_5NGAY = 8782;
var PATIENT_CATEGORY_ID = 28; //todo: id nơi giới thiệu nới giới thiệu

var SERVICE_IDS_HIVDetermine = [7665];
var SERVICE_IDS_HIVArchitect = [7664,31425];

var LIST_SAMPLES = [
    {sample_id:1, sample_name:"Máu", sample_name_en: "Blood", service_category_id: [11,12,113]},
    {sample_id:2, sample_name:"Dịch màng phổi", sample_name_en: "Pleural fluid", service_category_id:[]},
    {sample_id:3, sample_name:"Dịch não tủy", sample_name_en: "CSF", service_category_id:[]},
    {sample_id:4, sample_name:"Dịch âm đạo", sample_name_en: "Vaginal fluids", service_category_id:[]},
    {sample_id:5, sample_name:"Dịch âm hộ", sample_name_en: "Pussy translation", service_category_id:[]},
    {sample_id:6, sample_name:"Dịch niệu đạo", sample_name_en: "Urethral fluid", service_category_id:[]},
    {sample_id:7, sample_name:"Dịch màng bụng", sample_name_en: "Peritoneal fluid", service_category_id:[]},
    {sample_id:8, sample_name:"Dịch khớp", sample_name_en: "Joint fluid", service_category_id:[]},
    {sample_id:9, sample_name:"Dịch họng", sample_name_en: "Throat discharge", service_category_id:[]},
    {sample_id:10, sample_name:"Phân", sample_name_en: "Feces", service_category_id:[]},
    {sample_id:11, sample_name:"Nước tiểu", sample_name_en: "Urine", service_category_id:[114]},
    {sample_id:12, sample_name:"Mủ", sample_name_en: "Pus", service_category_id:[]},
    {sample_id:13, sample_name:"Chọc hút tế bào", sample_name_en: "Cell aspiration", service_category_id:[]},
    {sample_id:14, sample_name:"Chọc hút mô giải phẫu", sample_name_en: "Anatomical tissue aspiration", service_category_id:[]},
    {sample_id:15, sample_name:"Khác", sample_name_en: "Other", service_category_id:[]}
];
var SERVICE_NOT_DEFAULT_SAMPLE = [7692,7695,7697,7691,88889744,88889743,7710,88889742,7298,88890056];
//todo: id các màn hình chức năng
var FORM_ID_XUAT_NOI_BO = 5012;
var FORM_ID_XUAT_SU_DUNG = 5014;
var SERVICE_ID_SANS = "7542,7265,7266,88890132,8429,31397,88889754,9285,7281,7343,8479,9286,7554,7310,7268,7716,7303,8486,7280"; //service_id của dịch vụ xét nghiệm sản
var SERVICE_ID_CLS_SANS = [7270]; //service_id của dịch vụ cls sản
var SERVICE_ID_HPV = [7334,7344,8429,9289,9285,9286,88888900,88889894,88890032,7265,7512,88889754,7283,31397,7343,7347,7319,7552,7346,7543,7333,7544,7659,7542,7292,7280];
var SERVICE_TMH = [7396,88889600,8493,7410,88889730,88889892];
var SERVICE_XN_ISO = [7699,7301,7298,7697,7713,7705,7708,7695,7295,31437,31439,31441];
var USER_XN_ISO = ['thuantv', 'dungbh', 'longtd', 'trangttt', 'mytth', 'phund', 'hunglv1', 'thanhtd', 'ngantt1'];
var CARD_PREFIX = ['0010','0020','0050','0100'];
var SERVICE_XN_PHAN = [31385];
var message_noti_active_card = "Chào mừng Quý khách đã trở thành khách hàng thân thiết của Bệnh viện Hồng Ngọc.";

//todo: thêm id các màn hình chức năng xuất nội bộ và xuất xử dụng
var FORM_ID_XUAT_SU_DUNG = 5014;
