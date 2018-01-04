/**
 * Created by Anna on 04.01.2018.
 */
const _list = [
  {"id":"17d5653e-ab63-44cb-b1f6-403d9d7c48a0","name":"Twitterlist","location":"Namur","currency":62675},
  {"id":"9eee0e4e-d3a7-4a4c-aca8-00077164abf2","name":"Mydo","location":"Bojong","currency":18917},
  {"id":"6d3a7fd5-da98-4fc8-9818-c59ac9b15d36","name":"Gigazoom","location":"Marshintsy","currency":89681},
  {"id":"0146f5e8-226b-468b-82b2-66669dec26b2","name":"BlogXS","location":"Snegiri","currency":37538},
  {"id":"f9f903e5-4877-4147-bca2-988b1a838dcd","name":"Edgeify","location":"Pingyang","currency":25537},
  {"id":"d31a647e-5aca-4442-9ffc-638cccce00d2","name":"Innotype","location":"Shentong","currency":4115},
  {"id":"28256d73-8c9c-4005-bdda-186dbf3b0ea4","name":"Yacero","location":"Couva","currency":26663},
  {"id":"59ec4111-ab34-470b-96c7-38e2dee7d50a","name":"Buzzster","location":"Daveluyville","currency":75205},
  {"id":"0a24c7ba-1902-42e5-9eea-3274c653d241","name":"Fivespan","location":"Mechrá Belqsiri","currency":9107},
  {"id":"bb205027-6333-45b0-a830-921af731f6dc","name":"Twinder","location":"Baguio","currency":49489},
  {"id":"c362b8fb-6d80-4cd1-97b3-9c3e462362e9","name":"Eazzy","location":"Pangkalanbunut","currency":51006},
  {"id":"a4b18fe1-dc8a-421e-8dc5-4d5ef566a81a","name":"Gabtype","location":"Duping","currency":50988},
  {"id":"d7ab4cd2-7e59-42d1-abfc-8bf951b2bf4c","name":"Browsebug","location":"Abaetetuba","currency":97704},
  {"id":"e5d969c3-2e48-45dd-897e-4009800e7374","name":"Browsedrive","location":"Yujia","currency":84845},
  {"id":"97c3e326-0ae6-45f8-9229-f6fe106c84c7","name":"Meedoo","location":"Catujal","currency":20148},
  {"id":"5eca3bbc-32d4-454d-8520-ac2a561fec95","name":"Tagtune","location":"Delmas","currency":92074},
  {"id":"c6ada8ae-4824-4678-a35d-e527e2e715ba","name":"Vidoo","location":"Skien","currency":62896},
  {"id":"ea5aab43-2f7b-4cdc-84d2-126c754dca7f","name":"Gevee","location":"Chimen","currency":87636},
  {"id":"a52c1405-6eda-4749-b603-12d576ecc1e4","name":"JumpXS","location":"Lianglin","currency":11117},
  {"id":"ff2627b4-3c04-417a-a57d-d670ae1a7371","name":"Dynabox","location":"Thap Than","currency":89053},
  {"id":"8603e18a-9ba6-42a9-aa43-c87c96b790ee","name":"Flashdog","location":"Ciudad Choluteca","currency":31751},
  {"id":"b223e78a-d883-417a-b545-f0d39dbaf866","name":"Livetube","location":"Permas","currency":56178},
  {"id":"ca7bf221-63ee-4180-8ee7-0819ad3a2346","name":"Oyope","location":"Río Colorado","currency":83975},
  {"id":"af6c271b-f256-4309-b3ae-ae6c21db1437","name":"Fivebridge","location":"Älvdalen","currency":72046},
  {"id":"edad6171-7652-4b41-ae9f-b3c60cf97d8b","name":"Tanoodle","location":"Pushchino","currency":71404},
  {"id":"c05cab25-3b26-4574-9757-486f73efc51c","name":"Riffpath","location":"Ban Lŭng","currency":74335},
  {"id":"bbb608f8-cbfe-434b-923b-8cafebacaeed","name":"Oyondu","location":"Września","currency":89295},
  {"id":"4a1d8f7a-5d57-48dc-80ca-22bfd7152a2d","name":"Lajo","location":"São Lourenço do Sul","currency":75566},
  {"id":"7251620d-3191-42d8-92b5-7dc66f49c74e","name":"Oyoloo","location":"Viedma","currency":4005},
  {"id":"a505b744-2b99-4234-81c3-df267c61386c","name":"Oyoloo","location":"Carmen","currency":86301},
  {"id":"707769f1-b94f-4e50-a51a-f05bc2e1575a","name":"Trudeo","location":"San Isidro de Lules","currency":86915},
  {"id":"a8aeb8e0-19c1-4bff-ad34-e8b69c0918e5","name":"Podcat","location":"Colón","currency":89647},
  {"id":"922996a4-3743-447d-9915-6a10546bbaf7","name":"Jaxbean","location":"Ängelholm","currency":15611},
  {"id":"c4ff18a8-bcd7-4896-9156-0010e56ad295","name":"Tambee","location":"Velikiye Luki","currency":6093},
  {"id":"8063f634-940a-4e94-8b65-8664ccfbb0aa","name":"Babbleopia","location":"Hayama","currency":43584},
  {"id":"0395a92e-647b-4764-9567-f46e6c33076f","name":"Thoughtbeat","location":"Guilherand-Granges","currency":88737},
  {"id":"ddfbc9c9-c967-42da-8c2d-ad722f125930","name":"Eabox","location":"Pathein","currency":39361},
  {"id":"49dbc422-3424-4474-8373-2c4cce063286","name":"Oodoo","location":"Las Vegas","currency":60993},
  {"id":"b2561449-ab39-4971-b746-bb1c2c3aa74e","name":"Realbuzz","location":"Kangasala","currency":49561},
  {"id":"71b83053-fa87-4ced-94dc-445e53ab44eb","name":"Flashpoint","location":"San Juan","currency":83544},
  {"id":"ecce0626-ed38-4a7a-b831-e2a6a7f39a9b","name":"Youopia","location":"Putrajaya","currency":18531},
  {"id":"1afe65c8-3d4b-4935-aea6-f87048f43fac","name":"Katz","location":"Salima","currency":67429},
  {"id":"7a88ffdc-fcef-4563-8286-1e690f656d85","name":"Twimm","location":"João Pessoa","currency":37667},
  {"id":"a0f7ec19-5aa6-4a40-8366-a6847de4edd3","name":"Skaboo","location":"Waterloo","currency":21244},
  {"id":"cc604a09-8443-446d-b778-9d59742889cf","name":"Yakitri","location":"Haikou","currency":96049},
  {"id":"3027f685-be1f-4e37-abec-d974d623f25c","name":"Mymm","location":"Mistřice","currency":54749},
  {"id":"4875768c-9d19-4603-b80f-eb400a6ac40f","name":"Plambee","location":"Sanxi","currency":63606},
  {"id":"cb46eda0-a9ac-4e6e-90f2-8f5c0bd1036e","name":"Oloo","location":"Jinji","currency":81809},
  {"id":"9f7d0473-5dcf-47fd-90a0-5ca2d848b2fa","name":"Kwimbee","location":"Saumur","currency":88833},
  {"id":"15fe622a-51be-4f4f-96f9-3bfe03fc8131","name":"Realpoint","location":"Ximafang","currency":17882},
  {"id":"68d0f1a3-e9bc-4bce-8530-be7c529a7877","name":"Yodo","location":"Taiping","currency":97922},
  {"id":"1ad711cd-a035-4913-b2a1-40f4921c791e","name":"Twitterbeat","location":"Raofeng","currency":36863},
  {"id":"123e5b7c-9e2a-4388-8ce3-65ea0b7e9ef4","name":"Izio","location":"Jiqu","currency":91370},
  {"id":"f81cf997-60d1-45a5-b27d-7868bf0081a1","name":"Kayveo","location":"El Bálsamo","currency":22073},
  {"id":"3b56dbe7-3837-443f-96dc-5da7adb1e62a","name":"Skimia","location":"Varakļāni","currency":9097},
  {"id":"cdc765e6-fb39-4f8c-b93c-8ed03eb38ca3","name":"Avaveo","location":"Lešná","currency":17400},
  {"id":"e5caade0-43fc-44d1-a527-0b3de1889258","name":"Mydeo","location":"Mir","currency":1180},
  {"id":"21fb6412-8bc3-4319-b8c5-f0fc07cd3fed","name":"Linktype","location":"Heyou","currency":81378},
  {"id":"532a5001-ce63-449d-9dcd-04ecc2ec6c0f","name":"Topicshots","location":"Chenggang","currency":11810},
  {"id":"0c10090e-65ad-4a03-ad75-5dbddd6f9fe6","name":"Chatterpoint","location":"Ljungby","currency":49076},
  {"id":"6b99fdd7-329c-4781-9f0c-2f8907eb465a","name":"Jazzy","location":"Nevers","currency":46754},
  {"id":"3cf9ee12-a390-4b28-9747-c7b45fdbdfe5","name":"Pixope","location":"Lapuz","currency":15500},
  {"id":"6a4c8296-ffae-4103-b6cd-8bcecacf2ac0","name":"Bubblemix","location":"Hukeng","currency":27912},
  {"id":"115d7319-af16-444e-bdc1-b2f51f29758d","name":"Bubbletube","location":"Khon Buri","currency":79784},
  {"id":"f95656db-4d04-4cfc-bcb8-c452464bfda1","name":"Skiba","location":"Massy","currency":28843},
  {"id":"8d6f80f0-8d9f-4c0a-973c-a7769e1a2188","name":"Bluezoom","location":"Campurrejo","currency":47192},
  {"id":"5879579d-a916-474d-93b6-ba9a591e566c","name":"Digitube","location":"Karlskoga","currency":62907},
  {"id":"85682356-e9d9-4461-bd2e-0b610f2f2fe4","name":"Fanoodle","location":"Daleman","currency":98093},
  {"id":"e21aa67e-b73d-4a59-9d4c-e90fdbeebed0","name":"Ntags","location":"Cárdenas","currency":47963},
  {"id":"0628f0ca-a0b9-4cfe-b6b7-fbd9c5a4edd1","name":"Tagtune","location":"Irkutsk","currency":5202},
  {"id":"7ac60c35-2416-4827-a56d-6b7d3116b85e","name":"Bluejam","location":"Tangub","currency":60158},
  {"id":"9bb7baea-9b82-414e-8c5a-26334b87e6e9","name":"Izio","location":"Липково","currency":14923},
  {"id":"1df4f503-92df-44db-a096-96d0dd51002a","name":"Photospace","location":"Huangjiakou","currency":75432},
  {"id":"0f08b310-7b78-4e55-b1e7-e56d02338aed","name":"Quimm","location":"‘Abs","currency":92707},
  {"id":"b2d322a4-49e7-43e9-bd88-486e3d96360f","name":"Riffpedia","location":"Xiazhai","currency":190},
  {"id":"c82db0c7-26d7-4082-b8b9-d8b56ceda707","name":"Camimbo","location":"Arteche","currency":66364},
  {"id":"01fc5176-5e5a-4531-aed5-929c5c629c0b","name":"Jayo","location":"Seidu","currency":32747},
  {"id":"14a49726-c13a-4152-ad26-c93754785b3d","name":"Kayveo","location":"Utrecht (stad)","currency":36925},
  {"id":"51143422-07c7-4701-bdfe-4e24425e909c","name":"Realfire","location":"Ribeirão Preto","currency":44539},
  {"id":"6059c1ab-4c12-4c9a-8720-9fabdb71f746","name":"Twinder","location":"Babice","currency":19430},
  {"id":"aa3661fc-cc01-401e-a1f2-0ad4dce8553b","name":"Gabvine","location":"Lecong","currency":74160},
  {"id":"060bcfad-fb5b-4da5-af84-a0035ad53e23","name":"Npath","location":"Otradnaya","currency":37173},
  {"id":"2c39a975-2c7e-483d-8427-8c5092f0e333","name":"Oozz","location":"Gandu","currency":59748},
  {"id":"a07d7392-1bf6-40a8-ac88-e2f3d708d5db","name":"Tekfly","location":"Coro","currency":47162},
  {"id":"35f340c0-3e0e-417c-8894-80557af16fe2","name":"Kimia","location":"Kuwayris Sharqī","currency":16606},
  {"id":"b4b150eb-4d5b-49b0-9ec3-3949855159ad","name":"Buzzster","location":"Hultsfred","currency":91024},
  {"id":"1cc5c1df-361f-4d17-b055-33c48841e52e","name":"Zoomdog","location":"Xingshou","currency":62876},
  {"id":"444ad534-21f5-4ffd-93c3-469e98b17c8e","name":"Pixoboo","location":"Krajan","currency":88233},
  {"id":"bba1ee7a-fbd0-4fd4-8d0f-bc140f00e62e","name":"Ntags","location":"Port Moody","currency":75055},
  {"id":"85e4e100-6afd-459f-a368-eb393f4647ef","name":"Fivespan","location":"Tyszowce","currency":92215},
  {"id":"20e97afe-524c-4158-8873-75eec0bfc500","name":"Riffpath","location":"Cangkeuteuk Sabrang","currency":21055},
  {"id":"a0462f60-5a2e-461c-8fcb-e6d9f609ebc8","name":"Tanoodle","location":"Psachná","currency":9873},
  {"id":"2875274b-b655-4684-aa09-0312c98d20e3","name":"Geba","location":"Seoam","currency":23754},
  {"id":"72d9776c-268b-4f15-a3a2-1e8ad6f10661","name":"Janyx","location":"Sanjiang","currency":9878},
  {"id":"56f7cb46-0e90-46e0-90f1-d1b4d261cd2f","name":"Wikizz","location":"Bojong","currency":33153},
  {"id":"d0e8718a-bc28-468e-b678-1d1621ca62ac","name":"Rhynoodle","location":"Castelo","currency":89884},
  {"id":"2859f879-65f0-4da6-8ddf-ed8ee39b5a5f","name":"Realbuzz","location":"Sakado","currency":23284},
  {"id":"12e13e1d-7576-4842-abbd-de18e0a8de90","name":"Skipstorm","location":"Vukojevci","currency":76407},
  {"id":"789b5163-7377-4cbb-b68c-67d4b94e0288","name":"Cogidoo","location":"Vrdy","currency":43982},
  {"id":"d13c435d-75c6-4459-87ac-dde74a1aa971","name":"Jaxworks","location":"Nanterre","currency":48381},
  {"id":"02c05195-cb53-49c8-9eed-227c4f2d53be","name":"Skyble","location":"Córdoba","currency":59443},
  {"id":"bfe89363-6509-41e4-ba35-6fe34c7cd144","name":"Realpoint","location":"Kirovsk","currency":33964},
  {"id":"97fe6609-6ecf-4101-bcb3-01e9273bea21","name":"Wordware","location":"Yefremov","currency":23670},
  {"id":"516c6227-2212-4f5f-8f55-084df3ccb883","name":"Fivespan","location":"Clorinda","currency":88717},
  {"id":"5451942e-4343-4eac-bc25-bacc7a913b2d","name":"Voomm","location":"Sumberejo","currency":17832},
  {"id":"73876277-20e5-4a60-81b4-bc7a2dca3f0a","name":"Brightbean","location":"Shangmachang","currency":37551},
  {"id":"1f969fbf-f345-4f3a-9205-94f87547f272","name":"Edgeify","location":"Itarana","currency":77756},
  {"id":"e32bac8d-6b1a-4868-b072-4b046721259c","name":"Devpulse","location":"Usagara","currency":45805},
  {"id":"03918375-e31a-4dda-a63a-52895433d91b","name":"Photobean","location":"Vrachnaíika","currency":27921},
  {"id":"82325564-a75c-4c53-b372-44002b4dcc1a","name":"Abatz","location":"Shakhty","currency":35748},
  {"id":"c447773e-3e06-46a6-82e6-e8bba126468b","name":"Thoughtsphere","location":"Hohoe","currency":28175},
  {"id":"3f477ee7-1483-4b10-9939-d652df5faaea","name":"Quimba","location":"Żurowa","currency":2134},
  {"id":"2fcf554d-41c4-41bd-b046-92050553cda8","name":"Linkbridge","location":"Nanortalik","currency":76342},
  {"id":"d6973825-a7bb-4d20-9edc-4713faca80b2","name":"Realpoint","location":"Waitun","currency":52433},
  {"id":"8cb2f9c2-ef58-45fd-b304-2e4af6e99989","name":"Edgepulse","location":"El Crucero","currency":4744},
  {"id":"04302a95-a920-41be-9c8d-6ab606d1262c","name":"Trilia","location":"Wujia","currency":8181},
  {"id":"9e78df38-dc75-4089-a85b-779a7ee65a35","name":"Skyble","location":"Don Tan","currency":93047},
  {"id":"bf88fa78-3b87-4be5-87a8-6f87981843ba","name":"Shuffletag","location":"Xiaoshanzi","currency":37129},
  {"id":"2ee3c7f6-ce50-4b7c-9694-4c5832ac7969","name":"Realpoint","location":"Ros’","currency":50306},
  {"id":"97b9f7b9-44a9-4512-839a-1825848e0761","name":"Zooveo","location":"Arraial do Cabo","currency":8635},
  {"id":"c222fa2f-bf6c-4cc9-b349-5cced18877b7","name":"Innojam","location":"Kvissleby","currency":33747},
  {"id":"dcb5d8ac-8ac9-4c66-84a6-9d4b6a3bf9af","name":"Fivechat","location":"Antou","currency":61418},
  {"id":"31637f7e-312a-4271-8cde-a06c95b47aaf","name":"Brainsphere","location":"Stuttgart Stuttgart-Mitte","currency":17466},
  {"id":"32c0a116-7829-48ba-9233-f56b210adacd","name":"Skipstorm","location":"Ojos de Agua","currency":90204},
  {"id":"cca961f6-e0c1-4bc8-8a1c-98263b84bebd","name":"Zooveo","location":"Vale","currency":27682},
  {"id":"72f501cc-3bed-43ab-bbf7-bf9280076412","name":"Demivee","location":"Zhouling","currency":10808},
  {"id":"cbbbc003-ad35-4b43-a342-6c11d5266385","name":"Riffpath","location":"Saint-Lambert-de-Lauzon","currency":34750},
  {"id":"c03ef79d-fe01-4d4d-b970-51125bf53626","name":"Oyoba","location":"Samaipata","currency":43218},
  {"id":"e2f277de-37d8-4a62-b991-6e45b8cf0da0","name":"Eidel","location":"Shangping","currency":55689},
  {"id":"5b7d1813-dbfe-4db2-8771-48da181a04fe","name":"Bubbletube","location":"Lurut","currency":61175},
  {"id":"77642b0b-e82c-4ba3-b294-c7274697ae9b","name":"Kimia","location":"Maracha","currency":90561},
  {"id":"cab97bf6-383f-401f-9441-0adb77db5302","name":"Devbug","location":"Karanggintung","currency":24572},
  {"id":"7e16e925-56a9-4dfe-b562-735c0115e55d","name":"Buzzshare","location":"Dongzhang","currency":53965},
  {"id":"878738f0-3380-495f-afb5-09850e6cf823","name":"Trudeo","location":"Motema","currency":73955},
  {"id":"15ff8702-1cde-47b9-b560-704c5df30fa0","name":"Mynte","location":"Znamenka","currency":8645},
  {"id":"da5e349a-0fa6-41d6-b5c0-87ad7c14c32d","name":"Roodel","location":"Tempaling","currency":35788},
  {"id":"0cf5a6e9-dbe9-4a34-8d86-e2132383351e","name":"Skyndu","location":"Ramotswa","currency":26501},
  {"id":"b656e71d-e695-497a-9ddd-c258cd13f519","name":"Fivechat","location":"Čapljina","currency":81287},
  {"id":"ebc007d3-9e7f-4faa-ae7c-69d8df08f7de","name":"Shufflebeat","location":"Hanting","currency":64861},
  {"id":"abac4d50-e93f-4913-9d40-e0a59ead76c8","name":"Oyonder","location":"Sewon","currency":58557},
  {"id":"73a1a935-9a46-4c23-9980-554aaa6abe26","name":"Realfire","location":"Marseille","currency":32861},
  {"id":"53ac0ca8-938c-4b1e-97b5-a76f90006ece","name":"Roodel","location":"Rukaj","currency":17681},
  {"id":"9ec48812-9691-4415-b90b-b4ff032d7557","name":"Kwideo","location":"Musina","currency":89104},
  {"id":"86f3abdd-bd2f-4a0c-b34e-bd73147d635c","name":"Digitube","location":"Bangunharja","currency":10191},
  {"id":"4f30f32c-2b62-43b7-89c5-fc956ff71400","name":"Kwimbee","location":"Detroit","currency":66307},
  {"id":"13b19d61-c193-4440-aff6-67a9103ea18d","name":"Zoovu","location":"Juanshui","currency":30588},
  {"id":"fe591b83-5ce8-4b8d-afca-6c47c0d1751e","name":"Eare","location":"Fomento","currency":54381},
  {"id":"d300bc0c-54b3-4fce-8be5-9b219ecc28b5","name":"Dabshots","location":"Benito Juarez","currency":66255},
  {"id":"624da253-64c7-418a-bc3a-8ca7401561c7","name":"Dynava","location":"Le Havre","currency":56025},
  {"id":"5721128e-3130-4f7b-a29c-77be9f511aec","name":"Eare","location":"Ratchathewi","currency":42388}
]

export default {
  getList (cb, search) {
    setTimeout(() => {
      cb(_list.filter(list => {
        return list.name.toLowerCase().indexOf(search.toLowerCase()) > -1 || list.location.toLowerCase().indexOf(search.toLowerCase()) > -1
          || new RegExp(search).test(list.currency)
      }))
    }, 100)
  }
}