import { StyleSheet, Text, View, ScrollView } from "react-native";
import global from "../styles/globalStyle";
import GreenButton from "../components/GreenButton";

function ResearchApprovementScreen({ navigation }) {
  const handleButtonClick = () => {
    navigation.navigate("WifiGuide");
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
            안녕하세요? 본 연구는 경계선 성격 성향군과 비교군의 정서인식에서 드러나는 양상을 확인하기 위한 연구입니다. 본 연구에 참여할 것인지 여부를 결정하기 전에, 아래 내용을 신중하게 읽어보시기 바랍니다. 본 연구는 자발적으로 참여 의사를 밝히신 분에 한하여 수행될 것입니다. 내용을 읽고 궁금한 점이 있다면 위의 연락처로 문의해주시기 바랍니다.{"\n"}
            {"\n"}
            <Text style={styles.bold}>1. 연구의 목적 및 연구 대상</Text>
            {"\n"}: 본 연구는 어플리케이션을 활용하여 경계선 성격 성향군과 비교군의 얼굴표정, 목소리 정서인식 및 목소리-얼굴표정 통합 정서인식에서 차이가 있는지를 확인하기 위한 연구입니다.{"\n"}본 연구는 1차 설문연구와, 2차 어플리케이션 실험연구로 진행되며, 본 연구는 1차 연구에서 선별된 분들을 대상으로 하는 2차 실험연구에 해당합니다. 어플리케이션 실험에는 경계선 성격 성향을 가진 만 18세 이상의 여자 대학생 80명과, 경계선 성격 성향이 없는 만 18세 이상의 여자 대학생 80명이 참여할 것입니다.{"\n"}
            {"\n"}
            <Text style={styles.bold}>2. 연구 참여 방법, 절차 및 기간</Text>
            {"\n"}: 2023년 8월 1일부터 2023년 12월 31일까지 기간 중 안내문 발송일로부터 1주 이내 해당 실험에 1회 참여해주실 것을 요청 드립니다. 실험은 안드로이드 기반 어플리케이션으로 진행이 되며, 다운로드 및 설치의 어려움을 겪으실 경우 연구 책임자의 연락처 혹은 메일로 문의해주시길 바랍니다.{"\n"}실험 경과에는 약 15분~20분의 시간이 소요될 예정이며, 실험내용은 귀하의 정서인식 능력을 확인하기 위함입니다. 실험은 총 3단계로 구성돼 있으며, 임시저장 기능이 없으므로 연구 참여 동의 후 마지막 화면(실험 종료 안내 화면)까지 실험을 한 번에 완료해주시기 바랍니다.{"\n"}실험 장소는 귀하께서 타인에게 방해 받지 않고 소리와 실험에 집중할 수 있는 공간이면 어디든지 가능합니다. 실험에는 소리가 포함된 문항이 있어 이어폰을 착용한 뒤 시간적인 여유를 가지고 실시해주시기를 부탁드립니다.{"\n"}
            {"\n"}
            <Text style={styles.bold}>3. 연구 참여시 예상 되는 위험 및 이득</Text>
            {"\n"}: 2차 연구 참여로 인해 예상되는 직접적인 부작용이나 위협은 없지만, 응답자의 성향에 따라 실험 시 불쾌한 감정이 유발되거나 과거의 좋지 않았던 기억이 떠오를 수도 있습니다. 연구 참여 중 불편함을 느낀다면 언제든지 중단이 가능하고 철회할 수 있으며, 참여 이후 지속적으로 심리적 고통감이 느껴지거나 상담을 원하는 경우 인근 상담기관이나 정신건강복지센터와 연계하여 필요시에 방문이 가능한 센터의 연락처를 제공 하겠습니다. 연구 참여 동의 후 설문 응답을 중단하더라도 어떠한 불이익도 없습니다. 연구 참여로 인해 연구 참여자께 직접적인 이득은 없으나, 심리학 분야의 발전에 큰 도움이 될 것입니다.{"\n"}
            {"\n"}
            <Text style={styles.bold}>4. 개인 정보 보호 및 제공과 연구참여에 따른 보상</Text>
            {"\n"}: 본 연구에 참여하시게 되면 귀하의 나이, 학력, 전화번호, 이메일 등의 개인정보가 연구 책임자에게 제공됩니다. 수집된 개인정보 중 전화번호와 이메일은 실험 종료 후 연구 보상 제공이 완료된 이후 완전 삭제되어 폐기됩니다. 연구 보상은 5,000원 상당의 스타벅스 기프트카드(혹은 상응하는 기프티콘)가 제공될 것 입니다.{"\n"}
            {"\n"}연구를 위해 수집된 정보는 2024년 2월 28일까지 사용되며, 연구자료는 모두 암호화되어 안전하게 관리됩니다. 연구관련 자료는 연구종료 후 3년간 보관되며, 보관기간 종료 후 완전 삭제되어 폐기됩니다. 수집된 정보는 연구책임자만이 접근 가능하며, 다른 연구자에게 제공되지 않습니다. 다만, 연구자의 지도교수, 논문심사위원, 서울여자대학교 생명윤리위원회, 질병관리청 등은 연구대상자의 비밀 보장을 침해하지 않는 선에서 관련 규정 범위 안에서 연구자료를 열람할 수 있습니다. 귀하로부터 수집된 자료가 논문에 사용될 경우 귀하의 개인정보는 노출되지 않습니다. 연구책임자로서 귀하의 비밀 보장에 문제가 없도록 최선을 다하겠습니다.{"\n"}
            {"\n"}
            <Text style={styles.bold}>5. 동의의 철회</Text>
            {"\n"}: 본 연구의 설문 응답을 완료한 이후에도 연구에 참여하기로 한 동의를 철회할 수 있습니다. 연구 참여 동의를 철회하고자 할 경우에는 위의 연구책임자 이메일로 2024년 1월 15일까지 알려주시기 바랍니다. 동의 철회 시 귀하의 자료는 더 이상 연구에 사용되지 않고 완전 삭제되어 폐기되며, 보상을 수령하였더라도 연구책임자가 반환 처리하거나 반환 요구하지 않습니다.{"\n"}
            {"\n"}본 연구와 관련하여 궁금한 점은 연구진에게 문의하시기 바랍니다. (성명 : 손인영 연락처 : 010-5438-7174, inyoung0727@swu.ac.kr){"\n"}연구참여자로서 귀하의 권리에 대하여 문제가 발생된 경우에는 서울여자대학교 생명윤리위원회로 문의하시기 바랍니다. (02-970-5811, irb@swu.ac.kr)
          </Text>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <GreenButton text="동의" width="40%" onClick={handleButtonClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },

  bold: {
    fontWeight: "bold",
  },
  headerSection: {
    marginTop: 60,
  },

  contentSection: {
    flex: 1,
  },
  buttonContainer: {
    alignItems: "center",
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
