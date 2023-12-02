-- taskテーブルを作成する--
CREATE TABLE task (
  id INT AUTO_INCREMENT,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  name VARCHAR(255),
  PRIMARY KEY (id)
);

--テーブルの定義を確認する--
DESC task;

-- INSERT文は一回で10件のデータを挿入する--
INSERT INTO task (name) VALUES ('筋トレ'),('読書'),('洗濯'),('ゲーム'),('料理'),('勉強'),('本業'),('副業'),('散歩'),('買い物');

SELECT * FROM task LIMIT 5;
