import { StyleSheet, Text, View, ScrollView } from "react-native";
import global from "../styles/globalStyle";
import GreenButton from "../components/GreenButton";

function ResearchApprovementScreen({ navigation }) {
  const handleButtonClick = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={[styles.container, global.container]}>
      <View style={styles.headerSection}>
        <Text style={global.title}>
          연구 동의서를 꼼꼼히 읽으신 후,{"\n"}연구 참여에 동의하시는 경우{"\n"}아래의 버튼을 눌러 실험을 진행해주세요
        </Text>
      </View>

      <ScrollView>
        <View style={styles.contentSection}>
          <Text style={global.content}>
            안녕하세요? 본 연구는 경계선 성격 성향군과 비교군의 정서인식에서 드러나는 양상을 확인하기 위한 연구입니다. 본 연구에 참여할 것인지 여부를 결정하기 전에, 아래 내용을 신중하게 읽어보시기 바랍니다. 본 연구는 자발적으로 참여 의사를 밝히신 분에 한하여 수행될 것입니다. 내용을 읽고 궁금한 점이 있다면 위의 연락처로 문의해주시기 바랍니다. 1. 본 연구에는 경계선 성격 성향을 가진 만 18세 이상의 여자 대학생 80명과, 경계선 성격 성향이 없는 만 18세 이상의 여자 대학생 80명이 참여할 것입니다. 2. 2023년 7월 1일부터 2023년 12월 31일까지 기간 중 해당 실험에 1회 참여해주실 것을 요청 드립니다. 실험 경과에는 약 15분~20분의 시간이 소요될 예정이며, 실험내용은 귀하의 정서인식 능력을 확인하기 위함입니다. 실험은 총 3단계로 구성돼 있으며, 임시저장 기능이 없으므로 연구 참여 동의 후 마지막 화면(실험 종료 안내 화면)까지 실험을 완료해주시기 바랍니다. 실험에는 소리가 포함되어 있기 때문에 소리에 집중할 수 있는 공간에서 이어폰을 착용한 뒤 여유를 가지고 실시해주시기를 부탁드립니다. 3. 특별히 예민한 사항을 묻는
            질문이나 실험은 없으나, 응답자의 성향에 따라 실험 시 불쾌한 감정이 유발되거나 과거의 좋지 않았던 기억이 떠오를 수도 있습니다. 이럴 경우 귀하는 언제든지 실험을 멈추고 화면을 닫고 연구 참여를 그만두시기 바랍니다. 연구 참여 동의 후 응답을 중단하더라도 어떠한 불이익도 없습니다. 연구 참여로 인해 연구 참여자께 직접적인 이득은 없으나, 심리학 분야의 발전에 큰 도움이 될 것입니다. 4. 본 연구에 참여하시게 되면 귀하의 나이, 학력, 전화번호, 이메일 등의 개인정보가 연구 책임자에게 제공됩니다. 수집된 개인정보 중 전화번호와 이메일은 실험 종료 후 연구 보상 제공이 완료된 이후 완전 삭제되어 폐기됩니다. 연구 보상은 5,000원 상당의 스타벅스 기프트카드(혹은 상응하는 기프티콘)가 제공될 것 입니다. 연구를 위해 수집된 정보는 2024년 2월 28일까지 사용되며, 연구자료는 모두 암호화되어 안전하게 관리됩니다. 연구관련 자료는 연구종료 후 3년간 보관되며, 보관기간 종료 후 완전 삭제되어 폐기됩니다. 수집된 정보는 연구책임자만이 접근 가능하며, 다른 연구자에게 제공되지 않습니다. 다만, 연구자의 지도교수,
            논문심사위원, 서울여자대학교 생명윤리위원회, 질병관리청 등은 연구대상자의 비밀 보장을 침해하지 않는 선에서 관련 규정 범위 안에서 연구자료를 열람할 수 있습니다. 귀하로부터 수집된 자료가 논문에 사용될 경우 귀하의 개인정보는 노출되지 않습니다. 연구책임자로서 귀하의 비밀 보장에 문제가 없도록 최선을 다하겠습니다. 5. 본 연구의 설문 응답을 완료한 이후에도 연구에 참여하기로 한 동의를 철회할 수 있습니다. 연구 참여 동의를 철회하고자 할 경우에는 위의 연구책임자 이메일로 2024년 1월 15일까지 알려주시기 바랍니다. 동의 철회시 귀하의 자료는 더 이상 연구에 사용되지 않고 완전 삭제되어 폐기되며, 기프티콘을 수령하였더라도 연구책임자가 반환 처리하거나 반환 요구하지 않습니다. 본 연구와 관련하여 궁금한 점은 연구진에게 문의하시기 바랍니다. (성명 : 손인영 연락처 : 010-5438-7174, inyoung0727@swu.ac.kr) 연구참여자로서 귀하의 권리에 대하여 문제가 발생된 경우에는 서울여자대학교 생명윤리위원회로 문의하시기 바랍니다. (02-970-5811, irb@swu.ac.kr) 연구과제명 :경계선 성격 성향군의 얼굴표정과 음성 정서 인식
            관계 분석
          </Text>
        </View>
      </ScrollView>

      <GreenButton text="동의" width="40%" onClick={handleButtonClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  headerSection: {
    marginTop: 60,
    alignItems: "flex-start",
  },

  contentSection: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    color: "white",
    width: "40%",
    padding: 24,
    borderRadius: 20,
    marginBottom: 80,
    backgroundColor: "#3FBA73",
  },
});

export default ResearchApprovementScreen;
